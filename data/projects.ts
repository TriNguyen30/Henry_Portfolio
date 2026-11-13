export interface ProjectFeature {
  title: string;
  description: string;
  tag?: string;
}

export interface ProjectTechCategory {
  category: string;
  technologies: string[];
}

export interface ProjectGalleryItem {
  url: string;
  caption: string;
  title?: string;
}

export interface ProjectChallenge {
  title: string;
  description: string;
  solution: string;
}

export interface ProjectOverview {
  problem: string;
  solution: string;
  impact: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  role?: string;
  timeline?: string;
  team?: string;
  platform?: string;
  deliverables?: string[];
  overview?: ProjectOverview;
  features?: ProjectFeature[];
  techStack?: ProjectTechCategory[];
  gallery?: ProjectGalleryItem[];
  challenges?: ProjectChallenge[];
}

export interface ProjectSectionProps {
  title?: string;
  linkText?: string;
  linkHref?: string;
  projects?: Project[];
}

export const defaultProjects: Project[] = [
  {
    id: "fengdesk",
    title: "FengDesk AI",
    subtitle:
      "Intelligent Workspace Feng Shui Plant Recommendation & E-Commerce Platform",
    category: "Web App",
    description:
      "An AI-powered Feng Shui plant e-commerce platform featuring personalized workspace and plant recommendations, AI chatbot assistance, 3D plant visualization, and integrated online shopping and payment.",
    tags: [
      "E-commerce",
      "AI Recommendation",
      "AI Chatbot",
      "3D Visualization",
      "Online Payment",
      "OTP Authentication",
    ],
    imageUrl: "/images/fengdesk.io.vn_products (1).png",
    projectUrl: "https://fengdesk.io.vn/",
    role: "Lead Frontend Developer",
    timeline: "5 Months • 2026",
    team: "4 Members (Frontend & Backend)",
    platform: "Responsive Web Application",
    deliverables: [
      "Responsive Web UI",
      "AI Chatbot Interface",
      "3D Plant Visualization",
      "Payment & Cart Flow",
    ],
    overview: {
      problem:
        "Modern urban professionals spend countless hours at desks and seek harmonious, natural workspace decor. However, traditional Feng Shui consultations are expensive and complex, while typical e-commerce plant stores lack personalized guidance on which plants best balance individual energy and workspace environments.",
      solution:
        "FengDesk AI bridges modern e-commerce with traditional Feng Shui philosophy through artificial intelligence. Users input their birth year and desk orientation to receive bespoke plant recommendations, consult with an intelligent AI chatbot, inspect 3D botanical models, and seamlessly purchase plants with doorstep delivery.",
      impact:
        "Delivered a fluid, high-converting digital storefront with sub-second page loads, interactive 3D rendering at 60fps on modern mobile browsers, and an intuitive checkout flow with automated OTP verification and multi-method online payment.",
    },
    features: [
      {
        title: "Intelligent Feng Shui Recommender",
        description:
          "Algorithmic analysis matching user birth elements (Metal, Wood, Water, Fire, Earth) and workspace directional light to the ideal plant species and pot materials.",
        tag: "AI Engine",
      },
      {
        title: "Conversational AI Consultant",
        description:
          "Context-aware chatbot providing instant advice on plant care instructions, desk placement orientation, and Feng Shui harmony principles.",
        tag: "NLP Chatbot",
      },
      {
        title: "Interactive 3D Desk Visualization",
        description:
          "3D plant inspection with 360-degree rotation, scale adjustments, and realistic rendering to preview how the plant complements your workspace before ordering.",
        tag: "3D Graphics",
      },
      {
        title: "Secure E-Commerce & Checkout",
        description:
          "Complete purchasing system with real-time inventory tracking, multi-gateway online payments (PayOS / Banking), and SMS OTP customer authentication.",
        tag: "Checkout",
      },
      {
        title: "Responsive & Accessible UI",
        description:
          "Carefully structured layout and component library optimized for lightning-fast browsing on smartphones, tablets, and desktop displays.",
        tag: "Design System",
      },
      {
        title: "Order Tracking & Plant Care Guide",
        description:
          "User profile portal with live order status updates, watering schedules, and customized sunlight maintenance notifications.",
        tag: "User Experience",
      },
    ],
    techStack: [
      {
        category: "Frontend Architecture",
        technologies: [
          "ReactJS",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Motion",
        ],
      },
      {
        category: "State & Data Fetching",
        technologies: [
          "Redux Toolkit",
          "TanStack Query",
          "Axios",
          "REST APIs",
        ],
      },
      {
        category: "Interactive & AI",
        technologies: [
          "Three.js / Canvas",
          "AI Chatbot Integration",
          "PayOS Payment",
          "Email OTP",
        ],
      },
      {
        category: "Tooling & Infrastructure",
        technologies: ["Git / GitHub", "Vercel", "Figma", "ESLint"],
      },
    ],
    gallery: [
      {
        url: "/images/fengdesk.io.vn_products (1).png",
        caption:
          "Product catalog showcasing Feng Shui plants with elemental categorization and pricing.",
        title: "Catalog & Filtering",
      },
      {
        url: "/images/fengdesk.io.vn_products.png",
        caption:
          "Interactive store interface with comprehensive plant details and instant checkout triggers.",
        title: "Storefront Overview",
      },
    ],
    challenges: [
      {
        title: "Balancing 3D Rendering Performance with Mobile Load Times",
        description:
          "Rendering high-poly 3D plant meshes caused frame drops on low-tier mobile devices.",
        solution:
          "Optimized 3D geometry using lightweight GLTF/GLB formats, texture atlas compression, and lazy-loading 3D viewports only when scrolled into view.",
      },
      {
        title: "Complex Multi-Step Checkout & State Synchronization",
        description:
          "Handling dynamic coupon codes, address selection, and payment gateway redirects without losing cart state.",
        solution:
          "Leveraged Redux Toolkit with persistent state middleware and TanStack Query cache invalidation to ensure synchronous state throughout payment handoffs.",
      },
    ],
  },
  {
    id: "rescue-aid",
    title: "Rescue AID",
    subtitle: "Disaster Response & Emergency Coordination Platform",
    category: "Web App",
    description:
      "A disaster relief coordination platform that connects citizens with rescue teams through interactive maps, real-time emergency reporting, rescue request management, and online donation processing.",
    tags: [
      "Disaster Management",
      "Interactive Map",
      "Real-time Tracking",
      "Rescue Coordination",
      "Online Donation",
    ],
    imageUrl: "/images/rescue-aid.vercel.app_map.png",
    projectUrl: "https://rescue-aid.vercel.app/",
    role: "Frontend Developer",
    timeline: "3 Months • 2026",
    team: "3 Members (Frontend, Backend & Mobile)",
    platform: "Mission-Critical Web & Mobile Application",
    deliverables: [
      "Interactive Incident Map",
      "SOS Reporting Flow",
      "Dispatch Coordinator Portal",
      "Donation Transparency Dashboard",
    ],
    overview: {
      problem:
        "During natural disasters such as floods and storms, emergency hotlines become overwhelmed, leading to delays in locating stranded citizens. Rescue units lack unified spatial visualization of critical incidents, while aid donors struggle with transparency on where supplies and funding are allocated.",
      solution:
        "Rescue AID creates a unified, real-time command bridge between victims, volunteer rescue teams, and relief organizations. Stranded citizens submit geotagged SOS requests with immediate GPS coordinates, while rescue operators triage incidents on dynamic GIS maps and dispatch resources efficiently.",
      impact:
        "Significantly streamlined incident response times by enabling instant pinpoint geolocation and automated priority queueing. Built for low-bandwidth scenarios to ensure reliable operation during unstable network conditions in disaster zones.",
    },
    features: [
      {
        title: "Real-time Interactive Incident Map",
        description:
          "High-performance GIS mapping interface displaying flooded regions, trapped citizen markers, safe shelter points, and live rescue team locations.",
        tag: "GIS Mapping",
      },
      {
        title: "One-Touch Emergency SOS",
        description:
          "Streamlined reporting workflow allowing victims to transmit current GPS coordinates, household member headcount, medical emergencies, and photo attachments in seconds.",
        tag: "Emergency Alert",
      },
      {
        title: "Rescue Dispatch & Status Routing",
        description:
          "Operational triage dashboard for relief personnel to assign teams, update rescue stages (Pending, Dispatched, Rescued), and avoid duplicate deployments.",
        tag: "Dispatch Control",
      },
      {
        title: "Safe Shelter Locator & Capacity Tracker",
        description:
          "Dynamic list and map of certified community shelters showing remaining bed capacity, food stocks, clean drinking water, and medical staff presence.",
        tag: "Shelter Logistics",
      },
      {
        title: "Transparent Relief Fund Tracking",
        description:
          "Public donation dashboard with line-item transparency on incoming funds and operational expenditures for supplies, boats, and medical relief.",
        tag: "Donation Ledger",
      },
      {
        title: "Low-Bandwidth Offline Optimization",
        description:
          "Progressive caching and minimal asset weight to ensure fast initial render and form submissions even over 2G/3G mobile networks in storm-hit regions.",
        tag: "Resilience",
      },
    ],
    techStack: [
      {
        category: "Frontend Core",
        technologies: [
          "ReactJS",
          "TypeScript",
          "Next.js",
          "Tailwind CSS",
          "Motion",
        ],
      },
      {
        category: "Mapping & Geospatial",
        technologies: [
          "Leaflet / Mapbox",
          "Geolocation API",
          "OpenStreetMap",
          "GeoJSON",
        ],
      },
      {
        category: "Data & State Flow",
        technologies: [
          "TanStack Query",
          "Axios",
          "RESTful APIs",
          "WebSocket / Real-time",
        ],
      },
      {
        category: "Deployment & Quality",
        technologies: ["Vercel", "Git / GitHub", "ESLint", "Figma"],
      },
    ],
    gallery: [
      {
        url: "/images/rescue-aid.vercel.app_map.png",
        caption:
          "Interactive map interface displaying incident clusters, emergency rescue requests, and operational zones.",
        title: "Live Emergency Map",
      },
    ],
    challenges: [
      {
        title: "Rendering Hundreds of Live Geospatial Pins Smoothly",
        description:
          "Displaying hundreds of real-time disaster alerts caused browser lag and map panning stutter on mobile screens.",
        solution:
          "Implemented marker clustering algorithms and viewport-based GeoJSON bounding box queries so only pins in the current map view are rendered.",
      },
      {
        title: "Ensuring High Usability Under Extreme Stress",
        description:
          "Victims facing emergencies need the simplest possible interface without cognitive overload or unnecessary form fields.",
        solution:
          "Designed a high-contrast, large-touch-target SOS modal that automatically grabs browser GPS coordinates with a single tap.",
      },
    ],
  },
];
