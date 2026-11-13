"use client";

import { useEffect, useRef } from "react";

const VERTEX_SHADER = `#version 300 es
void main() {
  vec2 position = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
}`;

const FRAGMENT_SHADER = `#version 300 es
precision highp float;

out vec4 fragColor;

uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uPointer;
uniform float uPointerEnergy;
uniform float uDark;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);

  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));

  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  mat2 rotation = mat2(0.80, 0.60, -0.60, 0.80);

  for (int i = 0; i < 4; i++) {
    value += amplitude * noise(p);
    p = rotation * p * 2.03 + 11.7;
    amplitude *= 0.5;
  }

  return value;
}

float liquid(vec2 p, float t) {
  vec2 q = vec2(
    fbm(p + vec2(0.0, t * 0.30)),
    fbm(p + vec2(5.2, 1.3) - vec2(t * 0.26, 0.0))
  );

  vec2 r = vec2(
    fbm(p + 2.4 * q + vec2(1.7, 9.2) + t * 0.16),
    fbm(p + 2.4 * q + vec2(8.3, 2.8) - t * 0.14)
  );

  return fbm(p + 2.0 * r);
}

void main() {
  vec2 res = uResolution;
  vec2 p = (gl_FragCoord.xy - 0.5 * res) / min(res.x, res.y);
  float t = uTime;

  // The liquid bulges gently toward the cursor.
  vec2 toPointer = p - uPointer;
  float distanceToPointer = length(toPointer);
  float pull = exp(-distanceToPointer * distanceToPointer * 3.2);
  p -= normalize(toPointer + 1e-5) * pull * uPointerEnergy * 0.16;

  float height = liquid(p * 1.35, t);

  // Screen-space derivatives fake a smooth 3D surface for the highlight.
  vec3 normal = normalize(vec3(-dFdx(height) * 24.0, -dFdy(height) * 24.0, 1.0));
  vec3 lightDir = normalize(vec3(-0.45, 0.65, 0.62));
  float diffuse = clamp(dot(normal, lightDir), 0.0, 1.0);
  vec3 halfVec = normalize(lightDir + vec3(0.0, 0.0, 1.0));
  float specular = pow(clamp(dot(normal, halfVec), 0.0, 1.0), 42.0);

  // Light mode: pastel liquid on near-white paper.
  // Dark mode: an indigo/violet aurora with teal undertows.
  vec3 base = mix(vec3(0.965, 0.970, 0.977), vec3(0.023, 0.026, 0.047), uDark);
  vec3 blue = mix(vec3(0.720, 0.800, 0.960), vec3(0.120, 0.200, 0.520), uDark);
  vec3 lilac = mix(vec3(0.830, 0.750, 0.960), vec3(0.330, 0.145, 0.560), uDark);
  vec3 mint = mix(vec3(0.720, 0.910, 0.840), vec3(0.045, 0.360, 0.400), uDark);

  float bandA = smoothstep(0.28, 0.66, height);
  float bandB = smoothstep(0.46, 0.76, fbm(p * 2.1 + t * 0.10));
  float bandC = smoothstep(0.58, 0.86, height);

  vec3 color = base;
  color = mix(color, blue, bandA * mix(0.55, 0.82, uDark));
  color = mix(color, lilac, bandB * mix(0.45, 0.68, uDark));
  color = mix(color, mint, bandC * mix(0.34, 0.52, uDark));

  // In dark mode the crests of the liquid glow, so the motion reads even
  // though the base is almost black.
  float glow = pow(smoothstep(0.60, 0.95, height), 2.0);
  color += mix(vec3(0.28, 0.42, 1.0), vec3(0.60, 0.28, 1.0), bandB)
    * glow * 0.14 * uDark;

  color *= mix(0.935 + diffuse * 0.095, 0.80 + diffuse * 0.36, uDark);
  color += vec3(1.0) * specular * mix(0.26, 0.62, uDark);

  // Keep the edges calm so the content stays readable.
  float vignette = smoothstep(0.32, 1.02, length(p));
  color = mix(color, color * mix(0.975, 0.80, uDark), vignette);

  // Dithering avoids visible banding on the near-white gradient.
  color += (hash21(gl_FragCoord.xy) - 0.5) * mix(0.012, 0.007, uDark);

  fragColor = vec4(color, 1.0);
}`;

interface FluidBackgroundProps {
  className?: string;
}

export function FluidBackground({ className = "" }: FluidBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "high-performance",
      preserveDrawingBuffer: false,
    });

    if (!gl) {
      canvas.style.display = "none";
      return;
    }

    const compileShader = (type: number, source: string, label: string) => {
      const shader = gl.createShader(type);
      if (!shader) throw new Error("Unable to create shader");

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const log = gl.getShaderInfoLog(shader);
        console.error(
          `FluidBackground ${label} shader failed:`,
          log || "(empty info log)",
          "contextLost:",
          gl.isContextLost()
        );
        gl.deleteShader(shader);
        throw new Error(log || `${label} shader failed with an empty info log`);
      }

      return shader;
    };

    let program: WebGLProgram | null = null;

    try {
      const vertexShader = compileShader(
        gl.VERTEX_SHADER,
        VERTEX_SHADER,
        "vertex"
      );
      const fragmentShader = compileShader(
        gl.FRAGMENT_SHADER,
        FRAGMENT_SHADER,
        "fragment"
      );

      program = gl.createProgram();
      if (!program) throw new Error("Unable to create program");

      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(program) ?? "Unable to link program");
      }

      gl.useProgram(program);
    } catch (error) {
      console.error("FluidBackground failed to initialize:", error);
      canvas.style.display = "none";
      return;
    }

    const resolutionLocation = gl.getUniformLocation(program, "uResolution");
    const timeLocation = gl.getUniformLocation(program, "uTime");
    const pointerLocation = gl.getUniformLocation(program, "uPointer");
    const pointerEnergyLocation = gl.getUniformLocation(
      program,
      "uPointerEnergy"
    );
    const darkLocation = gl.getUniformLocation(program, "uDark");

    let pointerX = 0;
    let pointerY = 0;
    let targetPointerX = 0;
    let targetPointerY = 0;
    let pointerEnergy = 0.12;
    let targetPointerEnergy = 0.12;
    let elapsed = 12;
    let rafId = 0;
    let lastTimestamp = 0;
    let isDark = document.documentElement.classList.contains("dark");

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = motionQuery.matches;

    const draw = (time: number) => {
      gl.uniform1f(timeLocation, time);
      gl.uniform2f(pointerLocation, pointerX, pointerY);
      gl.uniform1f(pointerEnergyLocation, pointerEnergy);
      gl.uniform1f(darkLocation, isDark ? 1 : 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const cssWidth = Math.max(window.innerWidth, 1);
      const cssHeight = Math.max(window.innerHeight, 1);
      const maxPixels = 2_000_000;

      let scale = dpr;
      if (cssWidth * cssHeight * scale * scale > maxPixels) {
        scale = Math.sqrt(maxPixels / (cssWidth * cssHeight));
      }

      const width = Math.max(1, Math.round(cssWidth * scale));
      const height = Math.max(1, Math.round(cssHeight * scale));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      gl.viewport(0, 0, width, height);
      gl.uniform2f(resolutionLocation, width, height);

      if (reducedMotion) draw(elapsed);
    };

    const render = (timestamp: number) => {
      const delta = lastTimestamp
        ? Math.min((timestamp - lastTimestamp) / 1000, 0.05)
        : 1 / 60;
      lastTimestamp = timestamp;
      elapsed += delta;

      pointerX += (targetPointerX - pointerX) * 0.075;
      pointerY += (targetPointerY - pointerY) * 0.075;
      pointerEnergy += (targetPointerEnergy - pointerEnergy) * 0.06;
      targetPointerEnergy += (0.12 - targetPointerEnergy) * 0.012;

      draw(elapsed);
      rafId = requestAnimationFrame(render);
    };

    const start = () => {
      if (rafId || reducedMotion || document.hidden) return;
      lastTimestamp = 0;
      rafId = requestAnimationFrame(render);
    };

    const stop = () => {
      if (!rafId) return;
      cancelAnimationFrame(rafId);
      rafId = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      const width = Math.max(window.innerWidth, 1);
      const height = Math.max(window.innerHeight, 1);
      const minDimension = Math.min(width, height);

      const normalizedX = (event.clientX / width) * 2 - 1;
      const normalizedY = 1 - (event.clientY / height) * 2;

      targetPointerX = normalizedX * 0.5 * (width / minDimension);
      targetPointerY = normalizedY * 0.5 * (height / minDimension);
      targetPointerEnergy = 1;
    };

    const handlePointerLeave = () => {
      targetPointerEnergy = 0.12;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) stop();
      else start();
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;

      if (reducedMotion) {
        stop();
        draw(elapsed);
      } else {
        start();
      }
    };

    // The shader palette follows the `.dark` class on <html>.
    const handleThemeChange = () => {
      const nextIsDark = document.documentElement.classList.contains("dark");
      if (nextIsDark === isDark) return;

      isDark = nextIsDark;
      if (reducedMotion) draw(elapsed);
    };

    const themeObserver = new MutationObserver(handleThemeChange);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerdown", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("blur", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    motionQuery.addEventListener("change", handleMotionChange);

    resize();
    start();

    return () => {
      stop();
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerMove);
      window.removeEventListener("blur", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      motionQuery.removeEventListener("change", handleMotionChange);

      gl.deleteProgram(program);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 overflow-hidden ${className}`}
    >
      {/* Static fallback for browsers without WebGL2. */}
      <div className="fluid-fallback absolute inset-0" />

      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}

export default FluidBackground;
