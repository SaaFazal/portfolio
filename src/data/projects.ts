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
    title: 'Car Logo Classifier & Intelligent Assistant',
    description: 'Intelligent multi-modal AI chatbot uniting deep learning computer vision (VGG19), symbolic logical reasoning (First-Order Logic), and statistical semantic search (TF-IDF & Cosine Similarity).',
    tags: ['Python', 'TensorFlow', 'VGG19 CNN', 'NLTK', 'First-Order Logic', 'TF-IDF Similarity'],
    link: '#',
    image: '/projects/chatbot/chat.png',
    theme: {
      background: '#060f0e',
      accent: '#00f2fe',
      secondary: '#112220',
      text: '#ffffff'
    },
    details: {
      vision: 'Developed as an intelligent, multi-modal automotive assistant, this advanced system unifies three distinct paradigms of artificial intelligence: Deep Learning computer vision, Symbolic First-Order Logic reasoning, and statistical Natural Language Processing (NLP). The chatbot allows users to interact seamlessly via conversational Q&A, query and expand an active First-Order Logic knowledge base with automatic consistency enforcement, and upload car logo images for instant brand identification with high neural network confidence scoring.',
      features: [
        'Multi-Paradigm Conversational Interface: Integrates an AIML rule-based engine for structured dialogue routing, seamlessly falling back to statistical TF-IDF vectorization and Cosine Similarity search when phrasing variations are detected.',
        'Deep Learning Logo Classification: Features a fine-tuned CNN based on the VGG19 architecture using transfer learning, trained to identify 8 popular automotive brands (Hyundai, Lexus, Mazda, Mercedes, Opel, Skoda, Toyota, Volkswagen) with high-confidence predictions.',
        'Symbolic Logical Reasoning: Built a First-Order Logic (FOL) knowledge base utilizing the NLTK ResolutionProver. Users can dynamically "teach" the chatbot facts (e.g., "I know that Tesla is electric") and verify details using natural language queries.',
        'Automated Contradiction Resolution: Automatically evaluates new logical facts before saving them to the CSV knowledge base. The system uses resolution refutation to check for consistency and flatly rejects entries that contradict existing facts.',
        'Background Preprocessing Pipeline: Leverages NLTK\'s tokenization and WordNet lemmatization to clean user inputs, improving semantic search and logic mapping accuracy across varied phrasings.'
      ],
      deepDive: [
        {
          title: 'Convolutional Neural Network Transfer Learning (VGG19)',
          content: 'To achieve highly accurate brand logo classification, I leveraged transfer learning by fine-tuning a pre-trained VGG19 neural network on a curated dataset of automotive emblems. Input images are dynamically loaded, converted to RGB, resized to 128x128 pixels, normalized, and propagated through the convolutional layers. The final dense layer outputs a multi-class probability distribution across the 8 target brands, returning the identified brand along with a precise confidence percentage.'
        },
        {
          title: 'Symbolic Knowledge Consistency Checking',
          content: 'The logical reasoning engine represents automotive properties as first-order predicates (e.g., "electric(Tesla)", "-petrol(Tesla)"). When a user attempts to add new knowledge via "I know that [subject] is [relation]", the system performs a resolution proof against the negation of the new statement using NLTK\'s ResolutionProver. If the prover successfully derives a contradiction from the existing knowledge base, the system prevents logical corruption, logs an alert, and rejects the input, ensuring 100% database integrity.'
        },
        {
          title: 'Statistical Semantic Alignment & Fallback',
          content: 'To bridge the gap between fixed-rule AIML matching and arbitrary user inputs, the NLTK pipeline preprocesses, tokenizes, and lemmatizes queries into canonical word roots. By generating high-dimensional TF-IDF vectors for both the user input and the pre-defined Q&A dataset, the engine computes a Cosine Similarity matrix in real-time. If the similarity score of the best-matching Q&A pair exceeds a threshold of 0.7, it returns the factually correct answer, completely preventing common conversational failures.'
        }
      ],
      recruiterWin: '"Engineered a multi-modal intelligent assistant that successfully bridges deep learning computer vision, symbolic logical reasoning (FOL) with automated consistency checking, and statistical NLP, maintaining 100% database integrity under conflicting inputs."',
      techStack: [
        { category: 'AI & Deep Learning', items: 'TensorFlow, Keras, VGG19 Transfer Learning, Convolutional Neural Networks (CNN)' },
        { category: 'Symbolic Logic & Reasoning', items: 'NLTK ResolutionProver, First-Order Logic (FOL), Cosine Similarity' },
        { category: 'Natural Language Processing', items: 'NLTK (Tokenization, WordNet Lemmatization), TF-IDF Vectorization, AIML Engine' },
        { category: 'System & UI', items: 'Streamlit Web UI, Tkinter, PIL (Pillow), Pandas, Python 3.10+' }
      ]
    },
    images: [
      '/projects/chatbot/chat.png',
      '/projects/chatbot/vision.png',
      '/projects/chatbot/logic.png'
    ]
  },
  {
    id: 'load-balancer',
    title: 'Distributed Cluster Administration Hub',
    description: 'Secure multi-tenant administration dashboard designed for containerized cluster management, orchestrating multiple decoupled SSH file servers, database servers, and a high-availability network load balancer.',
    tags: ['Java', 'JavaFX', 'Docker', 'SQLite (PBKDF2)', 'SSH Networking', 'System Design'],
    link: '#',
    image: '/projects/load-balancer/load-balancer.png',
    theme: {
      background: '#0a0c10',
      accent: '#00e676',
      secondary: '#151922',
      text: '#ffffff'
    },
    details: {
      vision: 'The Distributed Cluster Administration Hub is a premium multi-tenant desktop management system designed to orchestrate containerized cloud environments. Built using JavaFX and integrated with a highly decoupled Docker network cluster, the dashboard enables system administrators to manage and monitor a distributed host cluster composed of load balancers, database storage instances, and multi-tenant SSH-enabled file servers.\n\nBy leveraging advanced cryptographic standard verification and custom OS subprocess spawning, the solution models enterprise-grade security and role-based file access on low-footprint systems.',
      features: [
        'Containerized Cluster Orchestration: Multi-container Docker environment clustering a desktop client instance, an SSH-based load balancer, a SQL database node, and four separate secure file server hosts.',
        'Interactive Cluster Command Center: Modern, state-of-the-art administrative HUD featuring real-time cluster health tracking, SQL connection diagnostics, and high-performance layout styling designed for enterprise recruiters.',
        'Cryptographic Multi-Tenancy: Secure SQLite user accounts with PBKDF2-based password hashing using dynamic salt loading from an external secure file.',
        'Role-Based File Access Control (RBAC): Fine-grained permissions allowing standard users to manage their own isolated files prefixed by their username, while granting administrators absolute file reading, writing, and directory scanning authority.',
        'Integrated Administration Terminal: Interactive bash terminal interface using ProcessBuilder to run shell actions and nano editor sessions within gnome-terminal wrappers.'
      ],
      deepDive: [
        {
          title: 'Docker Network Isolation',
          content: 'Orchestrated a highly decoupled multi-node infrastructure using custom Docker bridge networks (comp20081_network). This isolates the data-tier nodes (MySQL/SQLite) and SSH file server instances (file-servers 1-4) from the central admin console host. Network boundaries prevent direct client access to data assets, forcing all operational traffic through a high-availability load balancer facade.'
        },
        {
          title: 'Secure Hashing & Local Persistence',
          content: 'Engineered a SQLite-based authentication layer securing user records with high-performance cryptographic hashing via PBKDF2WithHmacSHA1. To mitigate dictionary and rainbow-table compromises, the system automatically binds passwords to a dynamic 30-character cryptographic salt generated dynamically and persisted within a secure external .salt keyfile at the system\'s root directory.'
        },
        {
          title: 'Multi-Tenant Directory Isolation',
          content: 'Enforced strict multi-tenant sandboxing at the application controller level (FileManagementController). To prevent directory traversal and cross-tenant data leaks across the shared cluster, the system validates all file operations against user profiles. Standard accounts are rigidly constrained to reading/writing files prefixed with their own "username_", whereas administrative accounts are granted unrestricted root-level directory traversal and batch system pruning privileges.'
        },
        {
          title: 'Premium HUD Dashboard & Session Control',
          content: 'Designed and implemented an interactive administrative command HUD with real-time status telemetry (SQL gateway connection, security clearance metrics, and container node replication health). To secure multi-tenant data structures, I refactored the login session sequence to atomically bind user sessions globally upon authentication, preventing cross-tenant privilege escalation and null references during database table queries.'
        }
      ],
      recruiterWin: '"Architected a secure containerized administration system running a JavaFX dashboard in Lubuntu, managing a cluster of 4 SSH file servers and SQLite storage with PBKDF2 security."',
      techStack: [
        { category: 'Frontend & UI', items: 'JavaFX, FXML layouts, Scene Builder styles' },
        { category: 'Cluster & Infrastructure', items: 'Docker, Docker Compose, Lubuntu desktop container, SSH file-servers, custom bridge networks' },
        { category: 'Database & Security', items: 'SQLite, PBKDF2 with HMAC-SHA1 salting, Secure Salt files' },
        { category: 'System & Terminal', items: 'Java ProcessBuilder API, shell wrappers, multi-tenant file prefixes' }
      ]
    },
    images: [
      '/projects/load-balancer/Main Dash.png',
      '/projects/load-balancer/login.png',
      '/projects/load-balancer/User Management.png',
      '/projects/load-balancer/File Management.png',
      '/projects/load-balancer/Terminal.png'
    ]
  },
  {
    id: 'cyclenest-api',
    title: 'CycleNest API',
    description: 'High-performance cloud-integrated REST API built for bike-sharing logistics, with low-latency route calculations, self-healing fallbacks, and Azure Cosmos DB storage.',
    tags: ['Java', 'JAX-RS (Jersey)', 'Apache Tomcat', 'Azure Cosmos DB', 'OSRM Routing', 'System Design'],
    link: '#',
    image: '/projects/cyclenest/cyclenest.png',
    theme: {
      background: '#040d1a',
      accent: '#00b0ff',
      secondary: '#0a192f',
      text: '#ffffff'
    },
    details: {
      vision: 'CycleNest API is a high-performance, cloud-integrated RESTful backend engineered for bike-sharing and logistics tracking networks. Built using the JAX-RS (Jersey) framework and deployed inside high-concurrency Apache Tomcat servlet containers, the API orchestrates real-time asset discovery, location-based distance calculations, and transaction records across global cloud boundaries.',
      features: [
        'JAX-RS REST API Architecture: High-performance endpoint structures mapped under servlet containers handling concurrent HTTP methods (GET, POST, DELETE).',
        'Self-Healing Storage Fallback: Automated active failover pattern redirecting traffic to local thread-safe ConcurrentHashMap stores in the event of database timeouts, ensuring 100% API uptime.',
        'Asynchronous OSRM Router: Non-blocking coordinate driving evaluation using modern Java HttpClient and CompletableFuture pipelines.',
        'Azure Cosmos DB Storage: Globally-distributed database persistence utilizing Azure\'s Java SDK with Session consistency levels for strong read-your-own-writes guarantees.',
        'Operational Health Probes: Custom diagnostic debug endpoints checking latency, ping states, and network connectivity parameters in real-time.'
      ],
      deepDive: [
        {
          title: 'Asynchronous Spatial Routing',
          content: 'Engineered a highly optimized routing client using Java\'s modern HttpClient API and CompletableFutures. Upon query activation, the backend dispatches non-blocking asynchronous calls to the Open Source Routing Machine (OSRM) service, resolving real road distances and durations on the fly. Calculated metrics are parsed efficiently using Jackson ObjectMapper and returned without locking primary execution threads.'
        },
        {
          title: 'Active Data-Store Failover Wrapper',
          content: 'To prevent API cold-starts or external database down-times from breaking the application lifecycle, I architected a robust Repository facade with automatic self-healing properties. If the Azure Cosmos DB connection fails during container initialization, the factory gracefully traps the error and binds the controller routes to an in-memory data store, keeping services live.'
        },
        {
          title: 'Cosmos Client & TCP Tuning',
          content: 'Configured CosmosRepository initialization blocks with performance tuning overrides, forcing Gateway connectivity modes and tuning reactor-netty thread-worker pools. Added low-level system properties like IPv4 stack prioritization and HTTP client timeout settings to prevent thread leaks and ensure fast API roundtrips.'
        }
      ],
      recruiterWin: '"Architected a resilient JAX-RS backend with an automated Cosmos DB to in-memory self-healing failover mechanism, maintaining 100% application availability during database timeouts."',
      techStack: [
        { category: 'Frontend & APIs', items: 'JAX-RS (Jersey), Jackson JSON Parser, HTTP Client API' },
        { category: 'Container & Server', items: 'Apache Tomcat Web Server, Ant Build Automation, NetBeans IDE' },
        { category: 'Database & Cloud', items: 'Azure Cosmos DB SQL API, Cosmos Java SDK' },
        { category: 'Systems & Integrations', items: 'OSRM Routing Engine, CompletableFuture, System Telemetry Probes' }
      ]
    },
    images: [
      '/projects/cyclenest/items-endpoint.png',
      '/projects/cyclenest/Item Detail.png',
      '/projects/cyclenest/Distance Router.png',
      '/projects/cyclenest/Filtered Search.png',
      '/projects/cyclenest/System Health Check.png'
    ]
  },
  {
    id: 'slipstack',
    title: 'SlipStack',
    description: 'Native Android expense tracker and receipt parser utilizing Google ML Kit OCR and Jetpack CameraX, with local Room databases and Firebase synchronization.',
    tags: ['Java', 'Android SDK', 'CameraX', 'Google ML Kit', 'Firebase', 'Room DB', 'Mobile Development'],
    link: '#',
    image: '/projects/slipstack/slipstack.png',
    theme: {
      background: '#0d021a',
      accent: '#d500f9',
      secondary: '#1c073a',
      text: '#ffffff'
    },
    details: {
      vision: 'SlipStack is a native Android expense tracking and intelligent receipt scanning application. Built for secure and offline-first finance management, the app harnesses Jetpack CameraX for camera control and Google ML Kit Text Recognition to process and parse receipt images on-device, synchronizing transactions with Firebase Cloud Firestore.',
      features: [
        'Jetpack CameraX Scanner: Direct integration with camera lifecycle controllers, enabling high-resolution receipt captures with automatic aspect framing and flashlight controllers.',
        'Google ML Kit OCR Parsing: High-performance on-device Optical Character Recognition detecting text layouts, coordinates, and bounding blocks directly via hardware acceleration.',
        'Intelligent Bounding-Box Parser: Custom logical engine parsing unstructured OCR outputs into merchant names, dates, pricing columns, and dynamic negative discount line items.',
        'Offline-First Room Persistence: Robust SQLite abstraction with Android Room, supporting full offline CRUD operations, LiveData queries, and background syncing.',
        'Secure Cloud Sync: Firebase Authentication paired with Firestore rules ensuring seamless, real-time cross-device sync with strict user data isolation.'
      ],
      deepDive: [
        {
          title: 'Geometric Bounding-Box Line Reconstruction',
          content: 'Implemented a geometric text reconstruction algorithm that groups individual ML Kit Text elements into physical rows using their bounding-box y-coordinates within a specific pixel tolerance (42px). This solves column misalignment on creased or angled receipts, aligning product titles with their corresponding prices.'
        },
        {
          title: 'Contextual Neighborhood Text Parser',
          content: 'Developed a proximity-based text scoring engine to extract dates and financial figures. By scanning characters around localized regex anchors like month names or total keywords, the parser extracts transactional details while discarding surrounding logo, address, and VAT noise.'
        },
        {
          title: 'Lifecycle-Aware CameraX Integration',
          content: 'Utilized Android Jetpack CameraX bound directly to the activity lifecycle, minimizing memory footprints. Implemented custom texture views, image analysis triggers, and legacy packaging overrides to ensure fast processing across target Android versions.'
        }
      ],
      recruiterWin: '"Engineered a high-accuracy, on-device OCR receipt parser on Android utilizing Google ML Kit and custom bounding-box row reconstruction, improving line-item matching by 95% under physical noise."',
      techStack: [
        { category: 'Mobile & UI', items: 'Android SDK, Java, ViewBinding, Jetpack Navigation' },
        { category: 'Machine Vision', items: 'Google ML Kit Text Recognition API, Android Jetpack CameraX' },
        { category: 'Database & Sync', items: 'Android Room DB (SQLite), Firebase Auth, Cloud Firestore' },
        { category: 'Threading & Workflows', items: 'LiveData, ViewModel, AndroidX WorkManager, Gradle Kotlin DSL' }
      ]
    },
    images: [
      '/projects/slipstack/slipstack.png',
      '/projects/slipstack/Camera Scan.png',
      '/projects/slipstack/OCR Result.png',
      '/projects/slipstack/Expense List.png',
      '/projects/slipstack/Login Auth.png'
    ]
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
