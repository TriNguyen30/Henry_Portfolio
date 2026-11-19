import type { AboutData } from "@/data/about";
import type { ExperienceItem } from "@/data/experience";
import type { Project } from "@/data/projects";
import type { StackItem } from "@/data/stack";
import { personalData } from "@/data/personal";
import type { PersonalContent } from "@/data/personal";

const personal: PersonalContent = {
  role: "Frontend Developer",
  status: "Open to opportunities",
  availabilityNote: "Open to Frontend Developer opportunities",
  bio: "I am a Frontend Developer passionate about building modern, responsive, and user-friendly web applications using React, Next.js, and TypeScript.",
  location: "Ho Chi Minh City, Vietnam",
};

const about: AboutData = {
  intro: [
    [
      { text: "Hi, I'm " },
      { text: personalData.name, bold: true },
      {
        text: ", a Frontend Developer passionate about building modern, responsive, and user-friendly web applications. I enjoy turning ideas and designs into functional digital experiences using modern frontend technologies.",
      },
    ],
    [
      {
        text: "I have experience working with ReactJS, TypeScript, and modern frontend ecosystems through practical projects and my experience at FPT Software. My projects include ",
      },
      { text: "FengDesk AI", bold: true },
      {
        text: ", an AI-powered Feng Shui plant recommendation and e-commerce platform, and ",
      },
      { text: "Rescue AID", bold: true },
      {
        text: ", a disaster response platform featuring interactive maps and emergency coordination workflows.",
      },
    ],
    [
      {
        text: "I value clean code, reusable components, and continuous learning. I'm always exploring new technologies and improving my skills to build better products and deliver meaningful user experiences.",
      },
    ],
  ],
  highlights: [
    { label: "Featured Projects", value: "02+" },
    { label: "Core Focus", value: "Frontend" },
    { label: "Development", value: "React & React Native" },
    { label: "Interests", value: "AI & Web/Mobile" },
  ],
  focusHeading: "What I Do",
  pillars: [
    {
      icon: "code",
      title: "Frontend Development",
      description:
        "Building responsive, accessible, and maintainable web applications using React, Next.js, and TypeScript.",
    },
    {
      icon: "layers",
      title: "UI Implementation",
      description:
        "Transforming Figma designs into pixel-perfect interfaces with reusable components and consistent design systems.",
    },
    {
      icon: "database",
      title: "API & State Management",
      description:
        "Integrating RESTful APIs and managing application data with Redux Toolkit and TanStack Query.",
    },
    {
      icon: "devices",
      title: "Interactive Web Experiences",
      description:
        "Developing engaging user experiences through interactive maps, 3D visualization, animations, and modern web technologies.",
    },
  ],
  principles: [
    "Clean & Maintainable Code",
    "Reusable Components",
    "Responsive Design",
    "Performance Optimization",
    "Problem Solving",
    "Continuous Learning",
  ],
};

const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Software Engineer",
    company: "FPT Software",
    period: "01/2025 - 04/2025",
    type: "Internship",
    description:
      "Developed responsive user interfaces from Figma designs using ReactJS and TypeScript. Completed assigned UI/UX tasks, translated wireframes and interactive prototypes into pixel-perfect components, and collaborated with mentors in an Agile/Scrum environment. Participated in code reviews and applied feedback to improve code quality and maintainability.",
    skills: [
      "ReactJS",
      "TypeScript",
      "Figma",
      "Git",
      "UI/UX",
      "Agile/Scrum",
    ],
  },
];

const stack: StackItem[] = [
  {
    id: "react",
    name: "ReactJS",
    category: "Frontend Development",
    icon: "react",
    url: "https://react.dev/",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "React Framework",
    icon: "nextjs",
    url: "https://nextjs.org/",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Programming Language",
    icon: "typescript",
    url: "https://www.typescriptlang.org/",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "CSS Framework",
    icon: "tailwind",
    url: "https://tailwindcss.com/",
  },
  {
    id: "redux",
    name: "Redux Toolkit",
    category: "State Management",
    icon: "redux",
    url: "https://redux-toolkit.js.org/",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend Runtime",
    icon: "nodejs",
    url: "https://nodejs.org/",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    icon: "mongodb",
    url: "https://www.mongodb.com/",
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Database",
    icon: "mysql",
    url: "https://www.mysql.com/",
  },
  {
    id: "git",
    name: "Git",
    category: "Version Control",
    icon: "git",
    url: "https://git-scm.com/",
  },
  {
    id: "html",
    name: "HTML5",
    category: "Markup Language",
    icon: "html",
    url: "https://www.w3.org/html/",
  },
  {
    id: "css",
    name: "CSS3",
    category: "Style Sheet Language",
    icon: "css",
    url: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Programming Language",
    icon: "javascript",
    url: "https://www.javascript.com/",
  },
  {
    id: "cplusplus",
    name: "C++",
    category: "Programming Language",
    icon: "cplusplus",
    url: "https://www.cplusplus.com/",
  },
  {
    id: "java",
    name: "Java",
    category: "Programming Language",
    icon: "java",
    url: "https://www.java.com/",
  },
  {
    id: "figma",
    name: "Figma",
    category: "UI/UX Design",
    icon: "figma",
    url: "https://www.figma.com/",
  },
];

const projects: Project[] = [
  {
    id: "fengdesk",
    title: "FengDesk AI",
    featured: true,
    subtitle:
      "Intelligent Workspace Feng Shui Plant Recommendation & E-Commerce Platform",
    category: "webApp",
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
        technologies: ["ReactJS", "TypeScript", "Tailwind CSS", "Motion"],
      },
      {
        category: "State & Data Fetching",
        technologies: ["Redux Toolkit", "TanStack Query", "Axios", "REST APIs"],
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
      {
        url: "/images/fengdesk.io.vn_products_1.png",
        caption:
          "Detail Product Page with responsive design for smartphones, tablets, and desktop displays.",
        title: "Detail Product Page",
      },
      {
        url: "/images/fengdesk.io.vn_products_2.png",
        caption:
          "3D plant inspection with 360-degree rotation, scale adjustments, and realistic rendering to preview how the plant complements your workspace before ordering.",
        title: "3D Plant Visualization",
      },
      {
        url: "/images/fengdesk.io.vn_products_3.png",
        caption: "AI Chatbot Interface with AI Engine",
        title: "AI Chatbot",
      },
      {
        url: "/images/fengdesk.io.vn_checkout.png",
        caption:
          "Interactive store interface with comprehensive plant details and instant checkout triggers.",
        title: "Checkout",
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
    category: "webApp",
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
    role: "Lead Frontend Developer",
    timeline: "3 Months • 2026",
    team: "4 Members (Frontend, Backend & Mobile)",
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
        technologies: ["ReactJS", "TypeScript", "Tailwind CSS", "Motion"],
      },
      {
        category: "Mapping & Geospatial",
        technologies: ["Vietmap", "Geolocation API", "GeoJSON"],
      },
      {
        category: "Data & State Flow",
        technologies: ["Axios", "RESTful APIs", "WebSocket / Real-time"],
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
  {
    id: "green-space",
    title: "Green Space",
    subtitle: "AI-Powered Plant Care & Sustainability Platform",
    category: "academic",
    description:
      "An academic entrepreneurship project focused on combining AI technology and sustainability to create a smarter plant care experience. Green Space provides users with an AI-powered chatbot for plant care consultation and practical guidance.",
    tags: [
      "Artificial Intelligence",
      "Plant Care",
      "Sustainability",
      "AI Chatbot",
    ],
    imageUrl: "/images/greenspace.io.vn_.png",
    projectUrl: "https://green-space.vercel.app/",
    role: "Lead Frontend Developer",
    timeline: "3 Months • 2026",
    team: "4 Members (Frontend, Backend & Mobile)",
    platform: "Responsive Web Application",
    deliverables: [
      "Responsive Web Application",
      "AI-Powered Plant Care Chatbot",
      "Plant Care Consultation Interface",
      "Sustainability-Focused Digital Experience",
    ],
    overview: {
      problem:
        "Many plant enthusiasts, especially beginners, struggle to find suitable plant care guidance and reliable information. Understanding watering requirements, lighting conditions, and proper plant maintenance can be challenging without accessible consultation.",
      solution:
        "Green Space is an entrepreneurship project that explores the use of AI technology in plant care. The platform integrates an AI-powered chatbot that allows users to ask plant-related questions and receive conversational guidance and recommendations.",
      impact:
        "Demonstrates how AI technology can be applied to everyday plant care needs, providing a more accessible consultation experience and promoting interest in sustainable living.",
    },
    features: [
      {
        title: "AI-Powered Plant Care Assistant",
        description:
          "An AI-powered chatbot that helps users with plant care consultation, answers plant-related questions, and provides guidance on watering, lighting, and general plant maintenance.",
        tag: "AI Integration",
      },
      {
        title: "Interactive AI Chatbox",
        description:
          "Provides a conversational interface where users can submit natural language questions and receive AI-generated responses for plant care consultation.",
        tag: "AI Chatbot",
      },
      {
        title: "Plant Care Information",
        description:
          "Presents plant-related information and care guidance to help users better understand plant maintenance and develop healthier gardening habits.",
        tag: "Plant Care",
      },
      {
        title: "Responsive User Interface",
        description:
          "Provides a clean, nature-inspired interface with responsive layouts and interactive elements for a consistent experience across devices.",
        tag: "Frontend",
      },
    ],
    techStack: [
      {
        category: "Frontend Core",
        technologies: ["ReactJS", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "AI Integration",
        technologies: ["OpenAI API", "Natural Language Processing"],
      },
      {
        category: "State & Data Fetching",
        technologies: ["Redux Toolkit", "TanStack Query", "Axios", "REST APIs"],
      },
      {
        category: "Interactive & AI",
        technologies: [
          "AI Chatbot Integration",
          "PayOS Payment",
          "Email OTP",
        ],
      },
    ],
    gallery: [
      {
        url: "/images/greenspace.io.vn_.png",
        caption:
          "Green Space landing page introducing the plant care platform and its AI-powered consultation experience.",
        title: "Home Page",
      },
    ],
    challenges: [
      {
        title: "Integrating AI-Powered Plant Care Consultation",
        description:
          "Integrating an AI chatbot into the platform while ensuring that users can easily ask plant-related questions and receive relevant responses.",
        solution:
          "Integrated the OpenAI API to support natural language conversations, allowing users to interact with the AI assistant through a dedicated plant care chatbox.",
      },
      {
        title: "Designing an Intuitive AI Chat Experience",
        description:
          "Creating a conversational interface that is easy to use while maintaining visual consistency with the platform's nature-inspired design.",
        solution:
          "Developed a responsive chat interface using ReactJS, TypeScript, and Tailwind CSS, with Motion to enhance interactions and improve the overall user experience.",
      },
      {
        title: "Leading Frontend Development",
        description:
          "Coordinating frontend development within a four-member team while ensuring consistency across the application's components and user interfaces.",
        solution:
          "Took responsibility for frontend development, component organization, and UI implementation while collaborating with backend and mobile team members.",
      },
    ],
  },
  {
    id: "quiz-app",
    title: "QuizBank",
    subtitle: "Quiz & Question Management Application",
    category: "personal",
    description:
      "A lightweight quiz management application built with the MERN stack, allowing users to manage quiz-related data through CRUD operations.",
    tags: ["MERN Stack", "CRUD", "Quiz Management", "MongoDB"],
    imageUrl: "/images/quizbankv1.vercel.app_.png",
    projectUrl: "https://quizbankv1.vercel.app/",
    role: "Full Stack Developer",
    timeline: "1 Month • 2025",
    team: "Solo Project",
    platform: "Responsive Web Application",
    deliverables: [
      "Responsive Web Application",
      "Quiz Management System",
      "CRUD Functionality",
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React.js"],
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Express.js"],
      },
      {
        category: "Database",
        technologies: ["MongoDB"],
      },
    ],
  },
];

const content: SiteContent = {
  personal,
  heroSkills: [
    "ReactJS",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "TanStack Query",
    "REST API",
    "Git",
  ],
  about,
  experience,
  stack,
  projects,
};

export type SiteContent = {
  personal: PersonalContent;
  heroSkills: string[];
  about: AboutData;
  experience: ExperienceItem[];
  stack: StackItem[];
  projects: Project[];
};

export default content;
