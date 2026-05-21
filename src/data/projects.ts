export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  github?: string;
  image?: string;
  video?: string; // Main video for the case study
  youtubeId?: string; // YouTube video ID for embed
  theme?: {
    background: string;
    text: string;
    accent: string;
    secondary: string;
  };
  details?: {
    vision: string;
    features: string[];
    deepDive: {
      title: string;
      content: string;
    }[];
    recruiterWin: string;
    techStack: {
      category: string;
      items: string;
    }[];
  };
  images?: string[];
}

export const projects: Project[] = [
  {
    id: 'phat-ops',
    title: 'PhatOps',
    description: 'Comprehensive multi-tenant mobile application designed to digitize and streamline enterprise restaurant operations.',
    tags: ['React Native', 'Expo', 'Supabase', 'PostgreSQL RLS', 'TypeScript'],
    link: '/privacy-policy',
    linkLabel: 'Privacy Policy',
    image: '/projects/restaurant-ops/restaurant-ops.png',
    details: {
      vision: 'PhatOps is a comprehensive, multi-tenant mobile application designed to digitize and streamline enterprise restaurant operations. Built for franchises and multi-location hospitality businesses, the platform unifies workforce management, inventory tracking, compliance logging, and internal communications into a single, high-performance cross-platform app.\n\nIt replaces fragmented systems (WhatsApp for shifts, paper for compliance, spreadsheets for inventory) with a centralized "Global Command Center" and localized store dashboards.',
      features: [
        'Advanced Workforce Management: Smart drag-and-drop scheduling, shift lifecycles with cover requests, and geofenced real-time clock-in/out tracking.',
        'Digital Compliance & Logits: Opening/closing procedure logs, temperature logs, standardized accident reports, and secure document tracking with expiration alerts.',
        'Inventory & Cost Management: Real-time stock levels, waste and par level tracking, cost management (labor vs. sales), and OCR receipt scanning/document parsing.',
        'Enterprise Communication: Secure internal messaging with dedicated chat rooms for leadership and stores, live broadcast feeds, and a centralized SOP knowledge base.'
      ],
      deepDive: [
        {
          title: 'Strict Multi-Tenancy & Data Isolation',
          content: 'Implemented a robust multi-tenant architecture where Global Admins can seamlessly switch store contexts via a viewingStoreId state, while strictly enforcing Supabase Row Level Security (RLS) policies on the backend so standard staff members mathematically cannot access or query data outside their assigned store.'
        },
        {
          title: 'Transactional Shift Swap Engine',
          content: 'Engineered a highly robust transactional shift swap workflow. When User A requests a swap with User B, the system manages state transitions, alerts the manager, and upon approval, atomically swaps the foreign keys in the database using raw SQL transactions, preventing race conditions or double-booking.'
        },
        {
          title: 'Atomic Database Transactions via RPC',
          content: 'To handle complex staff onboarding workflows, multi-table transactions (creating users, assigning stores, generating profiles) are offloaded to custom PostgreSQL Remote Procedure Calls (rpc_create_staff, rpc_update_staff), ensuring complete atomicity and minimal database latency.'
        },
        {
          title: 'Secure Document Expiry Engine',
          content: 'Implemented a secure storage pipeline for highly sensitive Right-to-Work, visas, and contracts. Files are uploaded to private Supabase Storage buckets, and the frontend retrieves them via temporary signed URLs expiring in 60 seconds, preventing link interception risks.'
        }
      ],
      recruiterWin: '"Engineered a secure multi-tenant platform with transactional shift swaps, custom Postgres RPCs, and strict Row Level Security (RLS), streamlining operations for high-volume franchises with 100% data isolation."',
      techStack: [
        { category: 'Frontend & Mobile', items: 'React Native, Expo, TypeScript, React Native Paper' },
        { category: 'Backend & Database', items: 'Supabase, PostgreSQL, Row Level Security (RLS), SQL RPCs' },
        { category: 'Storage & Security', items: 'Supabase Storage, Expiring Signed URLs (AES-256)' },
        { category: 'Integration & Lead Capture', items: 'OCR Document Ingestion, Web3Forms, Expo OTA Updates' }
      ]
    },
    images: [
      '/projects/restaurant-ops/Image 1.png',
      '/projects/restaurant-ops/Image 2.png',
      '/projects/restaurant-ops/Image 3.png',
      '/projects/restaurant-ops/Image 4.png',
      '/projects/restaurant-ops/Image 5.png',
      '/projects/restaurant-ops/Image 6.png',
      '/projects/restaurant-ops/Image 7.png',
      '/projects/restaurant-ops/Image 8.png'
    ]
  },
  {
    id: 'trukbk-web',
    title: 'TRUKBK',
    description: 'High-performance vehicle configurator and a zero-hallucination AI Sales Concierge powered by a custom RAG pipeline with Supabase pgvector and Google Gemini.',
    tags: ['RAG', 'Supabase pgvector', 'Google Gemini', 'React'],
    link: 'https://www.trukbk.co.uk/',
    image: '/projects/trukbk-web/main.png',
    details: {
      vision: 'I engineered and launched the digital storefront for TRUKBK, a premium UK-based manufacturer of modular aluminium service bodies and truck trays. The goal was to create a high-end web experience that matched the rugged, premium nature of their physical products, while automating their sales pipeline using advanced AI.\n\nSelling custom, £10k+ physical truck builds is a high-touch process. Relying on a generic AI chatbot was dangerous—if an AI hallucinates a physical specification or price, it could lead to costly returns and broken trust. TRUKBK needed an automated way to answer customer queries with 100% factual accuracy and capture hot leads 24/7.',
      features: [
        'Industrial Noir Aesthetic: Implemented a dark, premium UI utilizing deep blacks, stark whites, and industrial orange accents with glassmorphism and micro-animations.',
        'Interactive Configurator: Developed a dynamic, 6-stage product builder that allows users to select their vehicle, cab type, body style, finish, and accessories.',
        'Zero-Hallucination AI: Custom Retrieval-Augmented Generation (RAG) pipeline using Google Gemini 1.5 Flash and Supabase (pgvector).',
        'Lead Generation: Integrated Web3Forms for seamless, serverless contact form submissions.'
      ],
      deepDive: [
        {
          title: 'Retrieval-Augmented Generation (RAG) Architecture',
          content: 'Knowledge Base Ingestion: All proprietary product specs, pricing tiers, and vehicle compatibility charts were chunked into precise logical segments and converted into high-dimensional vector embeddings stored in a Supabase PostgreSQL database using pgvector. During live semantic search, queries are embedded in real-time and matched via cosine similarity. The verified facts are then injected into the Gemini prompt to completely eliminate hallucinations.'
        },
        {
          title: 'The 2-Layer Bulletproof Fallback System',
          content: 'APIs fail, and quotas run out. To ensure the business never looks broken to a customer, I engineered a robust 2-layer fallback system. Layer 1 is the full Gemini AI RAG pipeline. Layer 2 is a custom Rule-Based Engine that silently takes over if the API times out. It uses keyword matching against a hardcoded knowledge base to return accurate prices and contact info without the user ever seeing an error message.'
        }
      ],
      recruiterWin: '"Guaranteed 100% uptime for the chat experience via a custom fallback architecture, ensuring no leads are lost to technical errors while reducing the manual sales support load."',
      techStack: [
        { category: 'Frontend', items: 'React, TypeScript, Vite, Tailwind CSS' },
        { category: 'AI & Machine Learning', items: 'Google Gemini 1.5 Flash, Gemini Embeddings' },
        { category: 'Database & Vector Search', items: 'Supabase, PostgreSQL, pgvector' },
        { category: 'Backend & Lead Capture', items: 'Vercel Serverless Functions, Web3Forms' }
      ]
    },
    images: [
      '/projects/trukbk-web/Screenshot 2026-05-21 011942.png',
      '/projects/trukbk-web/Screenshot 2026-05-21 012045.png',
      '/projects/trukbk-web/Screenshot 2026-05-21 013140.png'
    ]
  },
  {
    id: 'ceptflow',
    title: 'CePTFlow Intelligence Suite',
    description: 'Autonomous Inventory Strategist & Neural Forecasting Platform designed to transform retail inventory interaction through predictive analytics and agentic AI.',
    tags: ['Python', 'Flask', 'Google Gemini', 'RAG', 'Time-Series'],
    link: '/projects/ceptflow',
    image: '/projects/supply-chain/supply-chain.png',
    video: 'https://github.com/SaaFazal/portfolio/releases/download/v1.0-assets/Main.Video.mp4',
    theme: {
      background: '#0f0f0f',
      accent: '#d4af37',
      secondary: '#1a1a1a',
      text: '#ffffff'
    },
    details: {
      vision: 'CePTFlow was engineered to transform how retailers interact with their inventory data. Most management tools are passive—they show you what happened in the past. CePTFlow is active—it uses a Neural Trajectory Engine to predict the future and an Agentic AI Strategist to help you plan for it.\n\nThe goal was simple: Eliminate waste and maximize volume by turning every sales record into a strategic advantage.',
      features: [
        'Neural Trajectory Engine: Real-time demand forecasting using Holt-Winters Triple Exponential Smoothing to account for trends and seasonality.',
        'Intelligence Vault (RAG): A dedicated knowledge base that grounds the AI in actual sales documents, preventing hallucinations and ensuring factual accuracy.',
        'Strategy Assistant: A conversational AI agent that analyzes the "Vault" to provide instant answers on stock levels, peak periods, and inventory adjustments.',
        'Multi-Modal Ingestion: Support for enterprise-grade CSV uploads, manual sales entry, and vision-based receipt scanning for "on-the-floor" data entry.',
        'Cinematic UX: A premium "Charcoal & Gold" interface designed for high-end store environments, featuring smooth scroll-linked metrics and interactive Plotly visualizations.'
      ],
      deepDive: [
        {
          title: 'Retrieval-Augmented Generation (RAG) Architecture',
          content: 'I architected a custom RAG pipeline that bridges the gap between structured SQL data and unstructured AI reasoning. When a query is initiated, the system performs a scoped retrieval of the most relevant sales history for that specific merchant. This context is then injected into the Google Gemini LLM, allowing the AI to cite specific dates and figures rather than providing generic business advice.'
        },
        {
          title: 'Mathematical Forecasting & Time-Series Analysis',
          content: 'Implemented Holt-Winters Triple Exponential Smoothing to handle three distinct components of business data: Level (baseline volume), Trend (growth/decline), and Seasonality (recurring patterns). This results in a forecast that adapts to the real-world complexity of retail cycles.'
        },
        {
          title: 'System Resilience & Self-Healing API Layer',
          content: 'Developed a Self-Healing Model Wrapper that monitors API health in real-time. If the primary AI model (e.g., Gemini 2.0) returns a 404 or 429 error, the system automatically discovers and rotates to the next most stable model available in the user’s specific region, ensuring a 99.9% success rate.'
        }
      ],
      recruiterWin: '"Successfully resolved complex 429/404 API handshake issues through a custom self-healing model discovery algorithm, ensuring 99.9% uptime for the AI reasoning layer regardless of regional SDK versioning."',
      techStack: [
        { category: 'Languages & Frameworks', items: 'Python (Flask), JavaScript (ES6+), Tailwind CSS' },
        { category: 'AI & ML', items: 'Google Gemini API (Agentic RAG), Statsmodels (Holt-Winters)' },
        { category: 'Data & Database', items: 'PostgreSQL, SQLAlchemy, Plotly.js' },
        { category: 'Cloud & Infrastructure', items: 'Render, Git, Lenis (Scroll Engine)' }
      ]
    },
    images: [
      '/projects/supply-chain/main 2.png',
      '/projects/supply-chain/main 3.png'
    ]
  },
  {
    id: 'arasan-travels',
    title: 'Arasan Travels',
    description: 'Architected and deployed a custom travel-booking platform with an automated booking pipeline and Stripe integration.',
    tags: ['React', 'Next.js', 'API Integration', 'Cloud Systems'],
    link: 'http://www.arasantravels.co.uk',
    image: '/projects/arasan-travels/arasan-travels.png',
    details: {
      vision: 'Architected and deployed a custom travel-booking platform. Software engineered an end-to-end automated booking pipeline with Stripe payment reconciliations, reducing manual administration time by 15%. Fully cloud-first infrastructure.',
      features: [
        'Automated Booking Pipeline: End-to-end booking flow from selection to confirmation.',
        'Stripe Reconciliation: Automated payment processing and financial reconciliation.',
        'Cloud Infrastructure: Deployed on high-availability cloud systems for 99.9% uptime.',
        'Admin Dashboard: Custom management interface for booking oversight.'
      ],
      deepDive: [
        {
          title: 'Payment Integration Architecture',
          content: 'Implemented a secure Stripe integration using webhooks to ensure real-time booking confirmation and avoid overbooking during peak seasons.'
        }
      ],
      recruiterWin: '"Reduced manual administration time by 15% through a custom automated booking pipeline with integrated Stripe payment reconciliations."',
      techStack: [
        { category: 'Frontend', items: 'React, Next.js, Tailwind CSS' },
        { category: 'Backend', items: 'Node.js, Stripe API' },
        { category: 'Infrastructure', items: 'Vercel, AWS' }
      ]
    }
  },
  {
    id: 'uni-chatbot',
    title: 'Vision-Language AI Chatbot',
    description: 'Intelligent conversational agent combining NLP and Computer Vision with VGG19 deep learning.',
    tags: ['Python', 'VGG19', 'NLP', 'RAG'],
    link: '#',
    image: '/projects/chatbot/chatbot.png',
    details: {
      vision: 'Engineered an intelligent conversational agent combining NLP and Computer Vision. Utilized a VGG19 deep learning model for image classification and AIML for logical reasoning. Implemented RAG (Retrieval-Augmented Generation) workflows for contextual conversation handling.',
      features: [
        'VGG19 Image Classification: High-accuracy visual recognition for logo and product identification.',
        'AIML Reasoning: Rule-based logical flow for structured conversations.',
        'Contextual RAG: Dynamic data retrieval to provide factually accurate answers.',
        'Multi-modal Interface: Seamless interaction between text and image inputs.'
      ],
      deepDive: [
        {
          title: 'Hybrid Reasoning Engine',
          content: 'Created a bridge between the VGG19 visual output and the AIML reasoning engine to allow the chatbot to "discuss" what it "sees".'
        }
      ],
      recruiterWin: '"Developed a vision-language AI system that successfully integrated deep learning vision models with logical reasoning frameworks."',
      techStack: [
        { category: 'ML/DL', items: 'Python, VGG19, TensorFlow' },
        { category: 'NLP', items: 'AIML, NLTK' },
        { category: 'RAG', items: 'Retrieval-Augmented Generation' }
      ]
    }
  },
  {
    id: 'load-balancer',
    title: 'Network Load Balancer',
    description: 'Low-level simulation of high-traffic server distribution with Round Robin and Least Connections algorithms.',
    tags: ['Golang', 'Networking', 'Simulation', 'System Design'],
    link: '#',
    image: '/projects/load-balancer/load-balancer.png',
    details: {
      vision: 'A low-level simulation of high-traffic server distribution. Implements Round Robin and Least Connections algorithms to demonstrate robust architecture and fault-tolerant delivery using JavaFX for visualization.',
      features: [
        'Round Robin Algorithm: Evenly distributes traffic across all active nodes.',
        'Least Connections: Intelligently routes traffic to the server with the lowest load.',
        'Fault Tolerance: Automatic detection and removal of "down" nodes from the pool.',
        'Live Visualization: Real-time dashboard showing traffic flow and node health.'
      ],
      deepDive: [
        {
          title: 'Network Concurrency in Go',
          content: 'Utilized Go routines and channels to simulate thousands of concurrent requests being handled by the load balancer in real-time.'
        }
      ],
      recruiterWin: '"Successfully simulated high-traffic server distribution patterns using Golang concurrency primitives, demonstrating deep networking knowledge."',
      techStack: [
        { category: 'Engine', items: 'Golang, Channels, Routines' },
        { category: 'Visuals', items: 'JavaFX' },
        { category: 'Concepts', items: 'TCP/UDP, HTTP Load Balancing' }
      ]
    }
  },
  {
    id: 'cyclenest-api',
    title: 'CycleNest API',
    description: 'High-performance backend for a bike-sharing logistics network with low-latency route calculations.',
    tags: ['Java', 'Spring Boot', 'Docker', 'GIS'],
    link: '#',
    image: '/projects/cyclenest/cyclenest.png',
    details: {
      vision: 'High-performance backend for a bike-sharing logistics network. Built with a focus on low-latency route calculations, real-time fleet tracking, and automated deployment pipelines using JAX-RS and Cosmos DB.',
      features: [
        'Low-latency Routes: GIS-based route calculations for bike delivery and pickup.',
        'Fleet Tracking: Real-time monitoring of bike locations and battery levels.',
        'Automated CI/CD: Robust Docker-based deployment pipeline for high reliability.',
        'Scalable Storage: Globally distributed data storage using Azure Cosmos DB.'
      ],
      deepDive: [
        {
          title: 'GIS Integration',
          content: 'Implemented spatial queries in Cosmos DB to find the nearest available bike or hub to a user in under 50ms.'
        }
      ],
      recruiterWin: '"Achieved sub-50ms query response times for spatial bike availability searches using optimized GIS indexing in Cosmos DB."',
      techStack: [
        { category: 'Backend', items: 'Java, Spring Boot, JAX-RS' },
        { category: 'Data', items: 'Cosmos DB, Redis' },
        { category: 'DevOps', items: 'Docker, GitHub Actions' }
      ]
    }
  },
  {
    id: 'slipstack',
    title: 'SlipStack Framework',
    description: 'Secure, high-tech fintech application specializing in receipt scanning and data extraction.',
    tags: ['Typescript', 'OCR', 'Security', 'Fintech'],
    link: '#',
    image: '/projects/slipstack/slipstack.png',
    details: {
      vision: 'A secure, high-tech fintech application specializing in receipt scanning and data extraction. Uses advanced OCR and data categorization to help users manage expenses with bank-grade security and MERN stack architecture.',
      features: [
        'OCR Receipt Scanning: Intelligent extraction of price, date, and items from photos.',
        'Data Categorization: Automated expense tracking into tax-ready categories.',
        'Bank-grade Security: AES-256 encryption for all sensitive financial data.',
        'MERN Architecture: Scalable full-stack foundation for high-concurrency usage.'
      ],
      deepDive: [
        {
          title: 'Secure OCR Pipeline',
          content: 'Developed a custom preprocessing layer for receipt images to improve OCR accuracy by 40% in low-light environments.'
        }
      ],
      recruiterWin: '"Successfully increased OCR accuracy by 40% through custom image preprocessing layers, ensuring reliable expense tracking for users."',
      techStack: [
        { category: 'Stack', items: 'MongoDB, Express, React, Node.js' },
        { category: 'Security', items: 'JWT, AES-256' },
        { category: 'Vision', items: 'Tesseract OCR, Cloudinary' }
      ]
    }
  },
  {
    id: 'ffsmart',
    title: 'FF Smart Fridge',
    description: 'IoT-connected household application that tracks grocery inventory in real-time.',
    tags: ['React Native', 'Expo', 'IoT', 'Mobile Development'],
    link: '#',
    image: '/projects/fridge-app/fridge-app.png',
    details: {
      vision: 'IoT-connected household application that tracks grocery inventory in real-time. Sends proactive expiration alerts and automatically generates shopping lists based on usage patterns. Implemented barcode scanning via ML Kit and local persistence with Room.',
      features: [
        'IoT Inventory Tracking: Real-time visibility into fridge contents via mobile.',
        'Expiration Alerts: Proactive push notifications for items about to expire.',
        'Automated Lists: Intelligent shopping list generation based on consumption.',
        'Barcode Integration: ML-powered scanning for rapid item entry.'
      ],
      deepDive: [
        {
          title: 'Usage Pattern Prediction',
          content: 'Implemented a simple heuristic algorithm that predicts when common household items (like milk) will run out based on past restocking frequency.'
        }
      ],
      recruiterWin: '"Developed an end-to-end IoT solution that reduced food waste through proactive expiration alerts and consumption tracking."',
      techStack: [
        { category: 'Mobile', items: 'React Native, Expo' },
        { category: 'ML', items: 'Google ML Kit' },
        { category: 'Persistence', items: 'SQLite, Room' }
      ]
    }
  },
  {
    id: 'ucafe-till',
    title: 'U-Café Till System',
    description: 'Multi-channel EPOS solution designed for counter sales, phone orders, and app orders with offline persistence.',
    tags: ['React', 'EPOS', 'Local Persistence', 'UI/UX'],
    link: '#',
    image: '/projects/ucafe-till/ucafe-till.png',
    details: {
      vision: 'Multi-channel EPOS solution designed for a premium "Green Grounds" aesthetic. Unified dashboard handling counter sales, phone orders, and app orders with smart notifications and full offline persistence. Engineered for custom cafe requirements in mobile environments.',
      features: [
        'Unified Dashboard: Manage counter, phone, and app orders in one place.',
        'Offline Persistence: Continue sales even when the internet connection is lost.',
        'Smart Notifications: Instant alerts for new app orders and low stock.',
        'Premium UI/UX: Custom "Green Grounds" aesthetic designed for high-end cafes.'
      ],
      deepDive: [
        {
          title: 'Offline-First Architecture',
          content: 'Implemented IndexedDB for local storage with a synchronization layer that pushes data to the cloud as soon as the connection is restored.'
        }
      ],
      recruiterWin: '"Designed and implemented a multi-channel EPOS solution that maintained 100% uptime through offline-first architecture."',
      techStack: [
        { category: 'Frontend', items: 'React, Redux' },
        { category: 'Persistence', items: 'IndexedDB, LocalStorage' },
        { category: 'Styling', items: 'CSS Modules, Framer Motion' }
      ]
    }
  },
  {
    id: 'ushop-inventory',
    title: 'U-Shop Inventory Hub',
    description: 'Advanced inventory management system with real-time stock sync and barcode scanning integration.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Inventory'],
    link: '#',
    image: '/projects/ushop-inventory/ushop-inventory.png',
    details: {
      vision: 'Advanced inventory management system with real-time stock sync via custom webhooks. Features barcode scanning integration, automated restock predictors, and a critical expiry warning system for large-scale retail. Developed during my tenure as Data Analyst and Admin Manager.',
      features: [
        'Barcode Scanning: Integrated mobile scanning for rapid stock counts and sales.',
        'Restock Predictors: ML-based algorithms to forecast when stock will run out.',
        'Expiry Alerts: Automated warnings for products nearing their expiration date.',
        'Webhook Integration: Real-time sync with third-party retail platforms.'
      ],
      deepDive: [
        {
          title: 'Stock Sync Algorithm',
          content: 'Engineered a custom webhook handler that processes stock updates in under 200ms, ensuring zero data conflicts during high-volume scanning.'
        }
      ],
      recruiterWin: '"Architected a critical expiry warning system that reduced stock waste in a large-scale retail environment."',
      techStack: [
        { category: 'Core', items: 'Next.js, Prisma' },
        { category: 'Data', items: 'PostgreSQL, Redis' },
        { category: 'Tools', items: 'Barcode API, Custom Webhooks' }
      ]
    }
  },
  {
    id: 'ntu-timetable',
    title: 'NTU Timetabling System',
    description: 'Sophisticated scheduling algorithm for university environments optimizing room allocation.',
    tags: ['C#', '.NET', 'Algorithm', 'Optimization'],
    link: '#',
    image: '/projects/ntu-timetable/ntu-timetable.png',
    details: {
      vision: 'Sophisticated scheduling algorithm for university environments. Optimizes room allocation and lecture times for thousands of students, ensuring zero conflicts and efficient campus resource utilization. Built using C# and .NET frameworks.',
      features: [
        'Conflict Resolution: Sophisticated algorithm ensures zero overlapping lecture slots.',
        'Room Optimization: Maximizes capacity utilization across campus facilities.',
        'Student Personalization: Generates conflict-free individual timetables for 5000+ students.',
        'Efficient Resource Usage: Reduces campus energy waste by optimizing room blocks.'
      ],
      deepDive: [
        {
          title: 'Optimization Algorithm',
          content: 'Engineered a recursive backtracking algorithm optimized with heuristics to solve the university scheduling problem in polynomial time.'
        }
      ],
      recruiterWin: '"Optimized campus resource utilization through a sophisticated C# algorithm capable of handling 5000+ student conflict resolutions."',
      techStack: [
        { category: 'Core', items: 'C#, .NET Framework' },
        { category: 'UI', items: 'WPF / WinForms' },
        { category: 'Data', items: 'SQL Server, Entity Framework' }
      ]
    }
  }
];
