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
    id: 'phat-ops',
    title: 'PhatOps',
    description: 'Comprehensive management solution for high-volume restaurants focusing on staff scheduling and task management.',
    tags: ['Next.js', 'Node.js', 'Operations'],
    link: '/privacy-policy',
    linkLabel: 'Privacy Policy',
    image: '/projects/restaurant-ops/restaurant-ops.png',
    details: {
      vision: 'PhatOps is a comprehensive management solution for high-volume restaurants. Centralizes staff scheduling, multi-unit task management, and digital shift logs to streamline daily operations and labor efficiency. Implemented auth and database integration with Supabase for real-time tracking.',
      features: [
        'Staff Scheduling: Intuitive drag-and-drop scheduling for complex shift rotations.',
        'Multi-Unit Tasks: Manage multiple restaurant locations from a single dashboard.',
        'Digital Shift Logs: Replace paper logs with real-time digital entries and alerts.',
        'Real-time Tracking: Instant visibility into operational performance via Supabase.'
      ],
      deepDive: [
        {
          title: 'Real-time State Management',
          content: 'Utilized Supabase real-time subscriptions to ensure all managers see live updates across multiple units without refreshing.'
        }
      ],
      recruiterWin: '"Successfully streamlined multi-unit operations by centralizing logs and scheduling, leading to a measurable increase in labor efficiency."',
      techStack: [
        { category: 'Framework', items: 'Next.js, Node.js' },
        { category: 'Database', items: 'Supabase, PostgreSQL' },
        { category: 'UI', items: 'Framer Motion, Tailwind' }
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
    id: 'trukbk-web',
    title: 'TRUKBK Transformation',
    description: 'High-performance vehicle configurator and a zero-hallucination AI Sales Concierge powered by a custom RAG pipeline with Supabase pgvector and Google Gemini.',
    tags: ['RAG', 'Supabase pgvector', 'Google Gemini', 'React'],
    link: 'https://truckbk.vercel.app/',
    image: '/projects/trukbk-web/trukbk-web.webp',
    details: {
      vision: 'Engineered a high-performance vehicle configurator and a zero-hallucination AI Sales Concierge. Built a custom RAG pipeline using Supabase pgvector for semantic product retrieval and Google Gemini for intelligent response generation. Implemented a 2-layer fallback architecture ensuring zero customer-facing errors.',
      features: [
        'Vehicle Configurator: High-fidelity configuration of truck tray and canopy builds.',
        'AI Sales Concierge: Zero-hallucination chatbot that quotes exact prices and specs.',
        'RAG Pipeline: Cosine similarity search against vectorised product data in pgvector.',
        '2-Layer Fallback: Rule-based engine silently kicks in if Gemini hits quota limits.'
      ],
      deepDive: [
        {
          title: 'RAG Architecture with pgvector',
          content: 'All product specs, dimensions, pricing tiers, and vehicle compatibility tables are chunked and converted into high-dimensional vector embeddings stored in Supabase pgvector. Customer queries are vectorised in real-time and matched via cosine similarity search, with the retrieved facts injected directly into Gemini\'s prompt for accurate, grounded responses.'
        }
      ],
      recruiterWin: '"Engineered a zero-hallucination AI Sales Concierge using a custom RAG pipeline with Supabase pgvector and Google Gemini, featuring a 2-layer fallback for 99.9% uptime."',
      techStack: [
        { category: 'AI', items: 'Google Gemini 1.5 Flash, RAG, pgvector' },
        { category: 'Frontend', items: 'React, Vite, Tailwind CSS' },
        { category: 'Data', items: 'Supabase, PostgreSQL, Web3Forms' }
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
];

