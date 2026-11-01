export interface Project {
  id: string;
  title: string;
  description: string;
  result?: string; // One line outcome shown on the card, facts from the CV only
  tags: string[];
  link?: string;
  linkLabel?: string;
  github?: string;
  image?: string;
  preview?: string; // 5 to 8 second muted webm loop for the card, under 1 MB
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
    problem?: string;
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
    section?: 'Client Work' | 'Personal Projects' | 'Engineering and Academic Projects';
  filterCategory?: 'All' | 'Data & BI' | 'AI & ML' | 'Full Stack' | 'Systems' | 'Mobile';
images?: string[];
}

export const projects: Project[] = [
{
    id: 'nhs-ae-performance',
    title: 'NHS A&E Service Performance Reporting Pack',
    result: 'September 2026 at 74.4%, 7.6 points below the 82% target, with 7 of 120 trusts on target',
    description: 'A monthly MI pack on 24 months of NHS England A&E data, with KPIs against the 82% four hour target, a RAG table of 120 trusts, written monthly commentary and a one click monthly refresh.',
    tags: ['Python (pandas)', 'SQL', 'Power BI', 'Power Query', 'DAX'],
    github: 'https://github.com/SaaFazal/nhs-ae-service-performance',
    image: '/projects/nhs-ae/dashboard.webp',
    details: {
      vision: 'A one page Power BI MI pack built the way a service reporting analyst works every month. It takes 24 months of NHS England A&E provider data (4,721 provider rows), tracks 4 hour performance against the 82% national target, 12 hour waits and month on month change, and ranks 120 major A&E trusts in a RAG table.',
      problem: 'Monthly service reporting has to be accurate, comparable month to month and quick to refresh when the next file lands.',
      features: [
        'KPI cards: 4 hour performance against the 82% target, attendances, 12 hour waits and month on month change.',
        'RAG table: a DAX driven RAG status and worst 10 ranking across 120 major A&E trusts, with conditional formatting.',
        'One click refresh: a Power Query folder append, so dropping in the new month and pressing Refresh moves the whole pack forward.',
        'Reconciliation: every monthly file is checked in Python against NHS England\'s published totals.',
        'Monthly commentary: a written summary of the September 2026 position.'
      ],
      deepDive: [
        {
          title: 'Cleaning and reconciliation in Python',
          content: 'Combined and cleaned 24 months of provider level CSVs in pandas, then checked that every month adds up exactly to NHS England\'s own total row. That check caught a file where the total row was written differently, which would have doubled February.'
        },
        {
          title: 'KPIs in SQL',
          content: 'Wrote the KPIs in SQL (SQLite): 4 hour performance, attendances, 12 hour waits, and month on month change using window functions (LAG).'
        },
        {
          title: 'Power BI pack and refresh',
          content: 'The page shows KPI cards against the 82% target, trend lines, a RAG table of the 120 major A&E trusts and a worst 10 list using a DAX rank. Power Query reads the whole folder, so holding back September and then adding it showed that one Refresh moves the pack to the new month.'
        },
        {
          title: 'September 2026 commentary',
          content: 'Performance fell to 74.4%, 7.6 points below target. Only 7 of 120 trusts were on target, 12 hour waits rose by 5,631 to 50,582, and the North West had 4 of the 10 worst trusts.'
        }
      ],
      recruiterWin: '"Built a monthly A&E MI pack from 24 months of NHS England data, reconciled every file to published totals, and reported September 2026 at 74.4% against the 82% target, with 12 hour waits up 5,631 to 50,582."',
      techStack: [
        { category: 'Data preparation', items: 'Python (pandas)' },
        { category: 'KPIs', items: 'SQL (SQLite, window functions)' },
        { category: 'Reporting', items: 'Power BI, Power Query (folder append), DAX, conditional formatting' }
      ]
    },
    images: ['/projects/nhs-ae/dashboard.webp'],
    section: 'Personal Projects',
    filterCategory: 'Data & BI'
  },
{
    id: 'demand-forecasting',
    title: 'Demand Forecasting and Inventory Planning',
    result: 'Best method weighted MAPE 48.2%, bias minus 7.5%, 15 of 25 products to reorder at 3 weeks of cover',
    description: 'Weekly forecasts for the top 25 products of a UK online retailer (1.07 million sales lines), using 3 methods on an 8 week holdout, plus safety stock, reorder points and a reorder list.',
    tags: ['Python (pandas, statsmodels)', 'SQL', 'Power BI', 'DAX'],
    github: 'https://github.com/SaaFazal/demand-forecasting-inventory',
    image: '/projects/demand-forecasting/dashboard.webp',
    details: {
      vision: 'A demand planner\'s job done on real data: two years of sales from a UK online retailer, 1.07 million sales lines. Weekly demand for the top 25 products is forecast three ways, scored on an 8 week holdout, and turned into safety stock, reorder points and a live reorder list in Power BI.',
      problem: 'Weekly wholesale demand is lumpy, so the planner needs to know which forecasting method to trust for each product and when to reorder.',
      features: [
        'Three forecasting methods: seasonal naive, an 8 week moving average and Holt Winters (statsmodels).',
        'Holdout scoring: each method scored on the last 8 weeks with MAPE, weighted MAPE and bias.',
        'Best method per product: the moving average won on 14 of 25 products, and best method selection gave a weighted MAPE of 48.2% with minus 7.5% bias.',
        'Inventory plan: safety stock and reorder points at a 95% service level and 2 week lead time.',
        'Planning page: a weeks of cover slider showing 15 of 25 products needing an order at 3 weeks of cover, falling to 6 at 4 weeks.'
      ],
      deepDive: [
        {
          title: 'Cleaning the sales lines',
          content: 'The two yearly sheets overlapped, so 22,000 duplicate rows were removed. Cancellations were kept as negative quantities, so an order cancelled the same day does not look like demand.'
        },
        {
          title: 'Weekly demand in SQL',
          content: 'Built weekly demand for the top 25 products in SQL (SQLite), using a recursive CTE and window functions.'
        },
        {
          title: 'Forecasting and scoring',
          content: 'The last 8 weeks were held out and forecast three ways: same week last year, an 8 week moving average and Holt Winters. The simple moving average won on 14 of 25 products, because weekly wholesale demand is lumpy. Picking the best method per product gave a weighted MAPE of 48.2% and a slight under forecast of 7.5%.'
        },
        {
          title: 'From forecast to reorder list',
          content: 'Safety stock comes from the forecast error at a 95% service level and a 2 week lead time, then a reorder point per product. In Power BI a DAX what if parameter drives a weeks of cover slider: at 3 weeks of cover 15 products need ordering, and at 4 weeks only 6.'
        }
      ],
      recruiterWin: '"Forecast weekly demand for 25 products from 1.07 million sales lines, compared 3 methods on an 8 week holdout (weighted MAPE 48.2%, bias minus 7.5%), and turned the result into safety stock, reorder points and a reorder list."',
      techStack: [
        { category: 'Data preparation and forecasting', items: 'Python (pandas, statsmodels Holt Winters)' },
        { category: 'Weekly demand', items: 'SQL (SQLite, recursive CTE, window functions)' },
        { category: 'Planning page', items: 'Power BI, DAX, what if parameter' }
      ]
    },
    images: ['/projects/demand-forecasting/dashboard.webp'],
    section: 'Personal Projects',
    filterCategory: 'Data & BI'
  },
{
    id: 'phat-ops',
    title: 'PhatOps',
    result: 'Used daily by 20 staff across 4 branches',
    description: 'Comprehensive multi-tenant mobile application launched on the App Store, digitizing operations across 4 PHAT Buns branches with rollout to 16 additional locations. It unifies workforce management, inventory tracking, compliance logging, and internal communications into a single cross platform app, with rendering latency cut by 20% through optimised components and tuned real time subscriptions.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    link: '/privacy-policy',
    linkLabel: 'Privacy Policy',
    image: '/projects/restaurant-ops/restaurant-ops.png',
    details: {
      vision: 'PhatOps is a comprehensive, multi-tenant mobile application designed to digitize and streamline enterprise restaurant operations. Officially published on the App Store, the system currently orchestrates daily workforce and supply operations across 4 active PHAT Buns franchise branches, with rolling deployments scheduled for 16 additional locations nationwide. The platform unifies workforce management, inventory tracking, compliance logging, and internal communications into a single cross platform app.\n\nIt replaces fragmented systems (WhatsApp for shifts, paper for compliance, spreadsheets for inventory) with a centralized "Global Command Center" and localized store dashboards.',
      problem: 'Shifts ran on WhatsApp, compliance on paper and inventory in spreadsheets, across 4 branches.',
      features: [
        'Production Deployment: Live on the iOS App Store, successfully powering operations for 4 franchise locations with rolling rollout to 16 future branches.',
        'Advanced Workforce Management: Smart drag-and-drop scheduling, shift lifecycles with cover requests, and geofenced real-time clock-in/out tracking.',
        'Digital Compliance & Logs: Opening/closing procedure logs, temperature logs, standardized accident reports, and secure document tracking with expiration alerts.',
        'Inventory & Cost Management: Real-time stock levels, waste and par level tracking, cost management (labor vs. sales), and OCR receipt scanning/document parsing.',
        'Enterprise Communication: Secure internal messaging with dedicated chat rooms for leadership and stores, live broadcast feeds, and SOP knowledge bases.'
      ],
      deepDive: [
        {
          title: 'Strict Multi-Tenancy & Data Isolation',
          content: 'Implemented a robust multi-tenant architecture where Global Admins can seamlessly switch store contexts via a viewingStoreId state, while strictly enforcing Supabase Row Level Security (RLS) policies on the backend so standard staff members mathematically cannot access or query data outside their assigned store.'
        },
        {
          title: 'Transactional Shift Swap Engine',
          content: 'Built a highly robust transactional shift swap workflow. When User A requests a swap with User B, the system manages state transitions, alerts the manager, and upon approval, atomically swaps the foreign keys in the database using raw SQL transactions, preventing race conditions or double-booking.'
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
      recruiterWin: '"Built a secure multi-tenant platform with transactional shift swaps, custom Postgres RPCs, and strict Row Level Security (RLS), streamlining operations for high-volume franchises with 100% data isolation."',
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
    ],
    section: 'Client Work',
    filterCategory: 'Full Stack'
  },
{
    id: 'trukbk-web',
    title: 'TRUKBK',
    result: 'Answers grounded in real product data, with a 2 layer fallback through API outages',
    description: 'Vehicle configurator and an AI Sales Concierge grounded in real product data, powered by a custom RAG pipeline with Supabase pgvector and Google Gemini. It automates high-touch B2B sales queries with grounded, hallucination-resistant responses via retrieval-augmented generation, capturing hot leads 24/7.',
    tags: ['RAG', 'Supabase pgvector', 'Google Gemini', 'React'],
    link: 'https://www.trukbk.co.uk/',
    image: '/projects/trukbk-web/main.png',
    details: {
      vision: 'I built and launched the digital storefront for TRUKBK, a premium UK-based manufacturer of modular aluminium service bodies and truck trays. The goal was to create a high-end web experience that matched the rugged, premium nature of their physical products, while automating their sales pipeline using advanced AI.\n\nSelling custom, £10k+ physical truck builds is a high-touch process. Relying on a generic AI chatbot was dangerous: if an AI hallucinates a physical specification or price, it could lead to costly returns and broken trust. TRUKBK needed an automated way to answer customer queries with grounded, hallucination-resistant responses via retrieval-augmented generation and capture hot leads 24/7.',
      problem: 'Custom truck builds sell for £10k+, so a chatbot that invents a spec or a price risks costly returns and lost trust.',
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
          content: 'APIs fail, and quotas run out. To ensure the business never looks broken to a customer, I built a robust 2-layer fallback system. Layer 1 is the full Gemini AI RAG pipeline. Layer 2 is a custom Rule-Based Engine that silently takes over if the API times out. It uses keyword matching against a hardcoded knowledge base to return accurate prices and contact info without the user ever seeing an error message.'
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
    ],
    section: 'Client Work',
    filterCategory: 'AI & ML'
  },
{
    id: 'restaurant-analytics',
    title: 'Restaurant Analytics',
    result: '10 raw tables modelled into a 14 relationship star schema with 18+ DAX measures',
    description: 'End-to-end Power BI business intelligence solution for a multi-branch restaurant. Wrote SQL against the client\'s live sales database to extract per-shop data, exported to CSV for modelling, then audited and cleaned 10 raw tables into a star-schema model with 14 relationships. Features 18+ DAX measures, a custom punctuality KPI comparing rostered shift starts against clock-in times, and a What-If wage-cost model. Client data and visuals are confidential at the client\'s request.',
    tags: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'Business Intelligence'],
    github: 'https://github.com/SaaFazal/Restaurant-Analytics',
    image: '/projects/restaurant-analytics/Home-Blurred.png',
    details: {
      vision: 'End-to-end Power BI business intelligence solution for a multi-branch restaurant. Wrote SQL against the client\'s live sales database to extract per-shop data, exported to CSV for modelling, then audited and cleaned 10 raw tables into a star-schema model with 14 relationships. Features 18+ DAX measures, a custom punctuality KPI comparing rostered shift starts against clock-in times, and a What-If wage-cost model. Client data and visuals are confidential at the client\'s request.',
      features: [
        'Data Quality Audit: Profiled all 10 files for row counts, duplicate keys, referential integrity, and logic checks before building.',
        'Power Query & Transformation: Removed irrelevant columns, standardized formats, and built derived columns.',
        'Data Modeling: Built a strictly directional 1-to-Many Star Schema with a central DimDate and 14 single-direction relationships.',
        'DAX Engineering (18+ Measures): Authored base measures, time intelligence, a punctuality KPI, and a dynamic What-If wage slider.',
        'Data Privacy & Anonymization: Client data and visuals are confidential at the client\'s request.'
      ],
      deepDive: [
        {
          title: 'Data Quality Audit & Power Query',
          content: 'Profiled all 10 files for row counts, duplicate keys, and referential integrity. Removed irrelevant columns to shrink model size, promoted headers, and standardized date/time formats.'
        },
        {
          title: 'Data Modeling (Star Schema)',
          content: 'Built a strictly directional 1-to-Many Star Schema. Created a central `DimDate` table using DAX `CALENDARAUTO()` for time-intelligence. Connected dimensions to facts with 14 established relationships, all single-direction filtering down to the facts to ensure performance and avoid ambiguity.'
        },
        {
          title: 'DAX Engineering & What-If Parameters',
          content: 'Authored 18+ DAX measures, including a punctuality KPI engineered from scratch to compare scheduled shift starts against actual clock-in times. Built a What-If wage-cost model letting owners test the profit impact of pay-rate changes before committing to them.'
        },
        {
          title: 'Confidentiality',
          content: 'Client data and visuals are confidential at the client\'s request.'
        }
      ],
      recruiterWin: '"Built an end-to-end Power BI solution for a multi-branch restaurant, transforming 10 raw operational CSVs into a robust star-schema data model with 14 relationships and 18+ DAX measures. Client data and visuals are confidential at the client\'s request."',
      techStack: [
        { category: 'Data Visualization & UI', items: 'Power BI Desktop, What-If Parameters' },
        { category: 'Data Modeling & Transformation', items: 'Star Schema, Power Query (M), Data Profiling' },
        { category: 'Analytics & Calculations', items: 'DAX (CALCULATE, FILTER, Time Intelligence, Iterators)' },
        { category: 'Data Engineering', items: 'CSV parsing, Data Anonymization' }
      ]
    },
    images: ['/projects/restaurant-analytics/Home-Blurred.png'],
    section: 'Client Work',
    filterCategory: 'Data & BI'
  },
{
    id: 'arasan-travels',
    title: 'Arasan Travels',
    result: 'Stripe reconciliation cut admin overhead by 15%',
    description: 'A premium, full-stack travel booking and package showcase platform powered by a serverless monorepo architecture and automated booking pipeline. It features an interactive trip discovery carousel, custom Expedia search widgets, and secure Stripe integrations, with automated reconciliation so every transaction ties out.',
    tags: ['React 19', 'Vite 7', 'Express v5', 'PostgreSQL', 'Drizzle ORM', 'Tailwind CSS v4', 'Stripe API'],
    link: 'http://www.arasantravels.co.uk',
    image: '/projects/arasan-travels/arasan-travels.png',
    
    details: {
      vision: 'Arasan Travels is an interactive web application designed for a luxury touring and coach travel agency. It provides customers with an immersive browsing experience for day trips and multi-day staycations across the UK and Europe. Built as a pnpm monorepo, the platform features a Vite-powered React 19 frontend, an Express API backend, a PostgreSQL database managed via Drizzle ORM, and automated lead capture with secure Stripe integrations.',
      problem: 'Bookings and payment reconciliation were handled by hand, taking admin time at the end of every period.',
      features: [
        'Interactive Trip Discovery: A horizontal scroll carousel showcasing staycation packages and day trips with custom nights/days badges and price points.',
        'Custom Expedia Search Widget: Fully responsive widget integration that allows booking flights, hotels, and custom travel packages directly through the platform.',
        'Booking & Enquiry Pipeline: Secure customer booking enquiries validating inputs via Zod schemas, persisting details to PostgreSQL, and sending Nodemailer confirmations.',
        'ESM Bundling for Serverless: Bundles the entire TypeScript Express backend into a single, standalone ES Module (.mjs) in /api/app.mjs using esbuild.',
        'Admin Analytics Portal: Protected dashboard showing real-time aggregates for trips, newsletter subscribers, and booking enquiries under ADMIN_TOKEN authentication.'
      ],
      deepDive: [
        {
          title: 'ESM Bundling for Serverless Environments',
          content: 'To deploy the Express backend within Vercel\'s serverless environment, I configured a custom build pipeline using esbuild. This compiles the entire TypeScript API into a single, standalone ES Module (/api/app.mjs) with all sub-workspace dependencies inlined. This bypasses Vercel\'s root-dependency compilation restrictions and ensures lightning-fast lambda cold starts.'
        },
        {
          title: 'Lazy Database Proxy Connection Pattern',
          content: 'Direct database pooling at the file level can crash serverless lambdas on cold starts if environment variables are missing or if the serverless pool is slow to respond. To resolve this, I implemented a lazy Proxy wrapper for the Drizzle database instance. The connection pool is provisioned dynamically only when the first SQL query actually executes.'
        },
        {
          title: 'End-to-End Type-Safe REST API Client',
          content: 'The entire application runs on a fully connected REST API layer. The React frontend interacts with the Express backend using a generated, type-safe API client package (@workspace/api-client-react). This guarantees that Drizzle database schemas and Zod validation rules propagate directly to React components, eliminating runtime API interface mismatches.'
        }
      ],
      recruiterWin: '"Built a monorepo with an Express serverless backend, lazy database proxying, and custom ESM bundling, reducing serverless cold starts to near-zero and ensuring 100% type safety from database to UI."',
      techStack: [
        { category: 'Frontend', items: 'React 19, Vite 7, Tailwind CSS v4, Framer Motion, Wouter, TanStack Query v5, Lucide React' },
        { category: 'Backend & API', items: 'Node.js, Express v5, esbuild (ESM Bundler), @workspace/api-client-react' },
        { category: 'Database & Schemas', items: 'Neon PostgreSQL, Drizzle ORM, Zod Schema Validation' },
        { category: 'Integrations', items: 'Stripe API (Payments), Nodemailer (SMTP), Expedia Search Widget' }
      ]
    },
    images: [
      '/projects/arasan-travels/arasan-travels.png',
      '/projects/arasan-travels/About.png',
      '/projects/arasan-travels/London attractions.png',
      '/projects/arasan-travels/Travellers shared moments .png'
    ],
    section: 'Client Work',
    filterCategory: 'Full Stack'
  },
{
    id: 'ushop-inventory',
    title: 'U-Shop HR Management',
    description: 'Comprehensive Human Resources and staff management dashboard built with React, Vite, and Supabase. It features employee lifecycle tracking, document management (RTW/Contracts), leave management, and secure role-based access.',
    tags: ['React', 'Vite', 'Supabase', 'Tailwind CSS', 'Shadcn UI', 'TypeScript'],
    github: 'https://github.com/SaaFazal/U-ShopHR',
    image: '/projects/ushop-inventory/ushop-inventory.png',
    
    details: {
      vision: 'U-Shop HR is a Human Resources dashboard built for retail operations. Designed to streamline staff management, it centralizes employee records, document storage, leave tracking, and audit logging into a single secure interface powered by Supabase and React.',
      features: [
        'Employee Lifecycle Management: Complete CRUD capabilities for staff records, including personal details, roles, and employment status.',
        'Document Vault: Secure file uploads for Right-to-Work (RTW) documents, contracts, and IDs, utilizing Supabase Storage.',
        'Leave & Absence Tracking: Dedicated modules for requesting, approving, and logging staff holidays and absences.',
        'Real-Time Audit Logs: Comprehensive activity tracking for compliance, logging every administrative action taken within the system.',
        'Modern UI/UX: Built with Shadcn UI and Tailwind CSS, featuring responsive dialogs, data tables, and a dark/light mode toggle.'
      ],
      deepDive: [
        {
          title: 'Supabase Backend Integration',
          content: 'The application leverages Supabase for its backend-as-a-service, utilizing PostgreSQL for relational employee data and Row Level Security (RLS) to ensure that sensitive HR documents and records are only accessible to authorized administrators.'
        },
        {
          title: 'Secure Document Management',
          content: 'Built a robust file upload pipeline handling sensitive HR documents. The system uses Supabase Storage buckets to securely store and retrieve employee contracts and compliance documents via signed URLs.'
        },
        {
          title: 'Component-Driven UI with Shadcn',
          content: 'Architected the frontend using Radix UI primitives and Shadcn UI to ensure accessibility and consistent design language. Complex interactions like uploading documents or editing employee schemas are handled via highly reusable modal dialogs and form validation with Zod.'
        }
      ],
      recruiterWin: '"Architected a secure, full-stack HR management dashboard using React, Vite, and Supabase, streamlining employee onboarding and compliance document storage."',
      techStack: [
        { category: 'Frontend', items: 'React 18, Vite, TypeScript, Tailwind CSS, Shadcn UI (Radix)' },
        { category: 'Backend & Database', items: 'Supabase (PostgreSQL), Row Level Security (RLS)' },
        { category: 'Forms & Validation', items: 'React Hook Form, Zod' },
        { category: 'Storage & State', items: 'Supabase Storage, TanStack React Query' }
      ]
    },
    images: [
      '/projects/ushop-inventory/Home.jpeg',
      '/projects/ushop-inventory/HR Management.jpeg',
      '/projects/ushop-inventory/Profile.jpeg'
    ],
    section: 'Client Work',
    filterCategory: 'Full Stack'
  },
{
    id: 'dev-insights',
    title: 'AI Developer Insights Platform',
    result: 'Developer personas from KMeans and PCA, plus an ensemble voting classifier',
    description: 'A complete data science pipeline using the CRISP-DM framework to analyse the 2024 Stack Overflow Developer Survey. Cleans and explores a large survey dataset, segments respondents into developer personas using K-Means clustering with PCA for dimensionality reduction, then compares supervised classifiers combined into an ensemble voting classifier.',
    tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Clustering', 'Classification'],
    github: 'https://github.com/SaaFazal/dev-insights-ai',
    image: '/projects/dev-insights/home.png',
    
    details: {
      vision: 'This project demonstrates an end-to-end Machine Learning and Data Analytics workflow to uncover deep demographic and income patterns across global developers. By processing massive datasets, the pipeline extracts actionable business intelligence through clustering and classification.',
      features: [
        'Advanced Data Preprocessing: Handling structural NaNs, categorical encoding, and feature standardization for massive datasets.',
        'Exploratory Data Analysis: Comprehensive visualizations using Seaborn and Matplotlib (Choropleth maps, scatter plots, and boxplots).',
        'K-Means Clustering & PCA: Grouping developers into optimized personas by evaluating Silhouette Scores and visualizing them via Principal Component Analysis.',
        'Ensemble Classification Models: Predicting high-income developers using Logistic Regression, Decision Trees, k-NN, and a final Voting Classifier.'
      ],
      deepDive: [
        {
          title: 'Unsupervised Learning & Clustering',
          content: 'Implemented K-Means clustering to discover hidden developer personas based on education, experience, and role. Evaluated the optimal K value using the Elbow Method and Silhouette Scores, and reduced dimensionality via PCA for clean visual interpretation.'
        },
        {
          title: 'High-Accuracy Ensemble Classifiers',
          content: 'Built a robust predictive pipeline utilizing multiple classification algorithms. By combining Logistic Regression, Decision Trees, and k-NN into an ensemble Voting Classifier, the system achieves robust performance on hold-out testing data.'
        }
      ],
      recruiterWin: '"Engineered a complete CRISP-DM machine learning pipeline that clusters developers and predicts high-income earners using ensemble classification models."',
      techStack: [
        { category: 'Data Processing', items: 'Python 3, Pandas, NumPy' },
        { category: 'Machine Learning', items: 'Scikit-learn (KMeans, PCA, Decision Trees, k-NN, Voting Classifier)' },
        { category: 'Visualization', items: 'Matplotlib, Seaborn' },
        { category: 'Environment', items: 'Jupyter Notebook' }
      ]
    },
    images: [
      '/projects/dev-insights/home.png',
      '/projects/dev-insights/page1.png',
      '/projects/dev-insights/page2.png'
    ],
    section: 'Engineering and Academic Projects',
    filterCategory: 'Data & BI'
  },
{
    id: 'cyclenest-api',
    title: 'CycleNest API',
    result: 'Keeps serving requests through cloud database outages via automated failover',
    description: 'Cloud integrated REST API built for bike-sharing logistics, with low-latency route calculations, self-healing fallbacks, and Azure Cosmos DB storage. It maintains high availability through an automated active failover pattern to local in-memory stores during cloud database timeouts.',
    tags: ['Java', 'JAX-RS (Jersey)', 'Apache Tomcat', 'Azure Cosmos DB', 'OSRM Routing', 'System Design'],
    github: 'https://github.com/SaaFazal/CycleNest',
    image: '/projects/cyclenest/cyclenest.png',
    
    details: {
      vision: 'CycleNest API is a cloud integrated RESTful backend built for bike-sharing and logistics tracking networks. Built using the JAX-RS (Jersey) framework and deployed inside high-concurrency Apache Tomcat servlet containers, the API orchestrates real-time asset discovery, location-based distance calculations, and transaction records across global cloud boundaries.',
      features: [
        'JAX-RS REST API Architecture: Endpoint structures mapped under servlet containers handling concurrent HTTP methods (GET, POST, DELETE).',
        'Self-Healing Storage Fallback: Automated active failover pattern redirecting traffic to local thread-safe ConcurrentHashMap stores in the event of database timeouts, maintaining high availability.',
        'Asynchronous OSRM Router: Non-blocking coordinate driving evaluation using modern Java HttpClient and CompletableFuture pipelines.',
        'Azure Cosmos DB Storage: Globally-distributed database persistence utilizing Azure\'s Java SDK with Session consistency levels for strong read-your-own-writes guarantees.',
        'Operational Health Probes: Custom diagnostic debug endpoints checking latency, ping states, and network connectivity parameters in real-time.'
      ],
      deepDive: [
        {
          title: 'Asynchronous Spatial Routing',
          content: 'Built a highly optimised routing client using Java\'s modern HttpClient API and CompletableFutures. Upon query activation, the backend dispatches non-blocking asynchronous calls to the Open Source Routing Machine (OSRM) service, resolving real road distances and durations on the fly. Calculated metrics are parsed efficiently using Jackson ObjectMapper and returned without locking primary execution threads.'
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
    ],
    section: 'Engineering and Academic Projects',
    filterCategory: 'Systems'
  },
{
    id: 'uni-chatbot',
    title: 'Car Logo Classifier & Intelligent Assistant',
    result: 'Facts that contradict the knowledge base are proven false and rejected',
    description: 'AI assistant combining computer vision (VGG19) for image recognition with logical reasoning and semantic search for accurate answers. It handles open conversational Q&A while maintaining strict logical consistency, and returns high-confidence logo classifications.',
    tags: ['Python', 'TensorFlow', 'VGG19 CNN', 'NLTK', 'First-Order Logic', 'TF-IDF Similarity'],
    github: 'https://github.com/SaaFazal/Car_Chatbot',
    image: '/projects/chatbot/chat.png',
    
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
          content: 'For brand logo classification, I used transfer learning by fine-tuning a pre-trained VGG19 neural network on a curated dataset of automotive emblems. Input images are dynamically loaded, converted to RGB, resized to 128x128 pixels, normalized, and propagated through the convolutional layers. The final dense layer outputs a multi-class probability distribution across the 8 target brands, returning the identified brand along with a precise confidence percentage.'
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
      recruiterWin: '"Built a multi-modal intelligent assistant that successfully bridges deep learning computer vision, symbolic logical reasoning (FOL) with automated consistency checking, and statistical NLP, maintaining 100% database integrity under conflicting inputs."',
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
    ],
    section: 'Engineering and Academic Projects',
    filterCategory: 'AI & ML'
  },
{
    id: 'ceptflow',
    title: 'CePTFlow Intelligence Suite',
    result: 'Holt Winters forecasts fed by 3 ingestion modes: CSV, manual entry and receipt scanning',
    description: 'Inventory Forecasting Platform combining Holt-Winters time-series forecasting with interactive Plotly dashboards for real-time stock insight, and AI Assistant to transform retail inventory decisions. It runs Holt Winters forecasting on historical sales, with a structured SQL layer underneath and Plotly dashboards on top.',
    tags: ['Python', 'Flask', 'Google Gemini', 'RAG', 'Time-Series'],
    link: '/projects/ceptflow',
    github: 'https://github.com/SaaFazal/CepTFlow',
    image: '/projects/supply-chain/supply-chain.png',
    video: 'https://github.com/SaaFazal/portfolio/releases/download/v1.0-assets/Main.Video.mp4',
    
    details: {
      vision: 'CePTFlow was built to help retailers make stock decisions from their own sales history. It runs Holt Winters time series forecasting on historical sales, keeps the data in a structured SQL layer, and presents the forecasts through Plotly dashboards, with an AI assistant to help plan around them.',
      features: [
        'Demand Forecasting Engine: Demand forecasting using Holt-Winters Triple Exponential Smoothing to account for trends and seasonality.',
        'Intelligence Vault (RAG): A dedicated knowledge base that grounds the AI in actual sales documents, preventing hallucinations and ensuring factual accuracy.',
        'Strategy Assistant: A conversational AI agent that analyses the "Vault" to provide instant answers on stock levels, peak periods, and inventory adjustments.',
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
    ],
    section: 'Engineering and Academic Projects',
    filterCategory: 'AI & ML'
  },
{
    id: 'load-balancer',
    title: 'Distributed Cluster Administration Hub',
    description: 'Secure multi-tenant administration dashboard designed for containerized cluster management, orchestrating multiple decoupled SSH file servers, database servers, and a high-availability network load balancer. It features strict role-based access control and cryptographic PBKDF2 hashing for enterprise-grade security.',
    tags: ['Java', 'JavaFX', 'Docker', 'SQLite (PBKDF2)', 'SSH Networking', 'System Design'],
    github: 'https://github.com/SaaFazal/JavaFX-Load-Balancer',
    image: '/projects/load-balancer/load-balancer.png',
    
    details: {
      vision: 'The Distributed Cluster Administration Hub is a premium multi-tenant desktop management system designed to orchestrate containerized cloud environments. Built using JavaFX and integrated with a highly decoupled Docker network cluster, the dashboard enables system administrators to manage and monitor a distributed host cluster composed of load balancers, database storage instances, and multi-tenant SSH-enabled file servers.\n\nBy leveraging advanced cryptographic standard verification and custom OS subprocess spawning, the solution models enterprise-grade security and role-based file access on low-footprint systems.',
      features: [
        'Containerized Cluster Orchestration: Multi-container Docker environment clustering a desktop client instance, an SSH-based load balancer, a SQL database node, and four separate secure file server hosts.',
        'Interactive Cluster Command Center: Administrative dashboard featuring real time cluster health tracking and SQL connection diagnostics.',
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
          content: 'Built a SQLite-based authentication layer securing user records with cryptographic hashing via PBKDF2WithHmacSHA1. To mitigate dictionary and rainbow-table compromises, the system automatically binds passwords to a dynamic 30-character cryptographic salt generated dynamically and persisted within a secure external .salt keyfile at the system\'s root directory.'
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
    ],
    section: 'Engineering and Academic Projects',
    filterCategory: 'Systems'
  },
{
    id: 'journey-test-suite',
    title: 'C++ GPS Journey Test Suite',
    result: 'Uncovered 11 defects across 2 independent developer implementations',
    description: 'An automated unit testing suite built in C++20 for a GPS journey analysis application. Utilizing the Boost Unit Test Framework, it rigorously validates edge cases and timing conditions to uncover hidden software defects.',
    tags: ['C++20', 'Software Testing', 'QA Engineering', 'Boost UTF', 'Qt', 'Systems Programming'],
    github: 'https://github.com/SaaFazal/JourneyTestSuite_CPP',
    image: '/projects/journey-test/main.png',
    
    details: {
      vision: 'The C++ GPS Journey Test Suite is designed to strictly validate the reliability of complex location-tracking algorithms. By employing rigorous test-driven development methodologies, this suite ensures flawless performance of GPS timing calculations in edge scenarios.',
      features: [
        'Boost Unit Test Framework: Comprehensive testing environment built using Boost UTF for automated test execution.',
        'Edge Case Validation: Deep validation spanning normal inputs, boundary conditions, and invalid arguments.',
        'Defect Discovery: Successfully uncovered 11 distinct bugs across different developer implementations of the GPS algorithm.',
        'Automated Build System: Fully integrated qmake and Makefile compilation process for seamless execution on Linux.'
      ],
      deepDive: [
        {
          title: 'Rigorous Software QA',
          content: 'The test suite acts as an uncompromising QA pipeline, simulating edge-case GPS inputs and tracking the correct time delays before journey commencement. It exposes logical flaws in low-level memory handling and exception throwing.'
        },
        {
          title: 'C++20 Systems Programming',
          content: 'Engineered using modern C++20 standards, with attention to memory safety. The integration with Boost UTF demonstrates an enterprise-grade approach to C++ software validation.'
        }
      ],
      recruiterWin: '"Developed a strict C++20 automated test suite using Boost UTF that successfully uncovered and isolated 11 bugs in a GPS tracking algorithm\'s edge-cases."',
      techStack: [
        { category: 'Language', items: 'C++20' },
        { category: 'Testing Framework', items: 'Boost Unit Test Framework (UTF)' },
        { category: 'Build Tools', items: 'qmake, Make, GCC' },
        { category: 'Environment', items: 'Linux / Ubuntu' }
      ]
    },
    images: [
      '/projects/journey-test/main.png',
      '/projects/journey-test/gps.jpg'
    ],
    section: 'Engineering and Academic Projects',
    filterCategory: 'Systems'
  },
{
    id: 'ntu-timetable',
    title: 'NTU Academic Timetabling System',
    description: 'Scheduling engine built in C++ utilising recursive backtracking and heuristic constraints to optimise academic room allocation and student timetables. It parses relational structural files and tackles an NP-complete scheduling problem efficiently using Maximum Constraints First heuristics.',
    tags: ['C++', 'Algorithms', 'Constraint Satisfaction', 'File System I/O', 'Optimization'],
    link: 'https://github.com/SaaFazal/Timetable-System',
    linkLabel: 'View on GitHub',
    image: '/projects/ntu-timetable/calendar.png',
    
    details: {
      vision: 'The NTU Academic Timetabling System is a sophisticated scheduling engine designed to solve the NP-complete Course Timetabling Problem. Built in C++, the application utilises recursive backtracking optimisation with smart heuristic constraint-satisfaction filters to generate conflict-free schedules for lecturers, classrooms, modules, and thousands of students concurrently.',
      features: [
        'Dynamic Constraint Solver: Custom backtracking scheduling engine that enforces hard constraints (e.g., no lecturer or room double-bookings) and soft constraints (e.g., uniform time-slot distribution).',
        'Relational CSV Data Loader: High-speed file parser loading relational schemas dynamically from structural flat files (students, lecturers, modules, and rooms).',
        'Classroom Capacity Allocator: Room assignments mapped strictly to module registration sizes, maximizing campus facility usage and minimizing energy waste.',
        'Conflict-Free Timetable Exporter: CSV reporting engine exporting optimised schedules (e.g. timetable_export.csv, timetable_GRP04.csv) ready for administrative integration.',
        'Heuristic Resource Optimiser: Pre-sorting optimisation heuristics that evaluate high-friction modules first, reducing recursion depth and improving solver speeds.'
      ],
      deepDive: [
        {
          title: 'Constraint Satisfaction Backtracking Algorithm',
          content: 'Built a recursive backtracking algorithm optimised for Constraint Satisfaction Problems (CSP). The solver maps variables (lectures) to values (room/timeslot slots). Hard constraints are mathematically checked at each recursion step (no teacher, group, or room clashes), pruning unviable branches early and preventing combinatorial explosions.'
        },
        {
          title: 'Heuristic-Guided Search Pre-Sorting',
          content: 'Implemented pre-sorting heuristics (Maximum Constraints First) that schedule high-enrollment modules and lecturers with limited availability first. This reduces backtracking steps significantly, allowing the C++ engine to resolve complex academic datasets efficiently by prioritizing the most restrictive constraints.'
        },
        {
          title: 'Structured CSV Data Pipeline',
          content: 'Designed a thread-safe data parser utilizing standard C++ file stream operations to digest relational raw tables. The loader reads students, lecturers, classrooms, and module requirements, instantiating in-memory index mappings before feeding the compiled structures to the CSP optimization algorithm.'
        }
      ],
      recruiterWin: '"Built a C++ timetabling solver utilizing recursive backtracking and pre-sorting CSP heuristics, resolving complex, conflict-free schedules for 5,000+ students efficiently."',
      techStack: [
        { category: 'Language & Framework', items: 'C++17, Native Execution' },
        { category: 'Optimization Core', items: 'Constraint Satisfaction Problem (CSP), Recursive Backtracking, Constraint Pruning' },
        { category: 'Data & File I/O', items: 'std::ifstream / std::stringstream pipelines, CSV Parser, Relational Object Mapping' },
        { category: 'Reporting & Logs', items: 'Export System (timetable_export.csv), Conflict Loggers' }
      ]
    },
    images: [
      '/projects/ntu-timetable/dashboard.png',
      '/projects/ntu-timetable/calendar.png',
      '/projects/ntu-timetable/solver.png'
    ],
    section: 'Engineering and Academic Projects',
    filterCategory: 'Systems'
  },
  {
    id: 'slipstack',
    title: 'SlipStack',
    description: 'Native Android expense tracker and receipt parser utilising Google ML Kit OCR and Jetpack CameraX, with local Room databases and Firebase synchronization. It features a custom geometric bounding-box algorithm to accurately reconstruct lines and extract financial data from unstructured physical receipts.',
    tags: ['Java', 'Android SDK', 'CameraX', 'Google ML Kit', 'Firebase', 'Room DB', 'Mobile Development'],
    github: 'https://github.com/SaaFazal/SlipStack-Android',
    image: '/projects/slipstack/slipstack.png',
    
    details: {
      vision: 'SlipStack is a native Android expense tracking and intelligent receipt scanning application. Built for secure and offline-first finance management, the app harnesses Jetpack CameraX for camera control and Google ML Kit Text Recognition to process and parse receipt images on-device, synchronizing transactions with Firebase Cloud Firestore.',
      features: [
        'Jetpack CameraX Scanner: Direct integration with camera lifecycle controllers, enabling high-resolution receipt captures with automatic aspect framing and flashlight controllers.',
        'Google ML Kit OCR Parsing: On device Optical Character Recognition detecting text layouts, coordinates, and bounding blocks directly via hardware acceleration.',
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
          content: 'Utilised Android Jetpack CameraX bound directly to the activity lifecycle, minimizing memory footprints. Implemented custom texture views, image analysis triggers, and legacy packaging overrides to ensure fast processing across target Android versions.'
        }
      ],
      recruiterWin: '"Built a high-accuracy, on-device OCR receipt parser on Android utilizing Google ML Kit and custom bounding-box row reconstruction, improving line-item matching by 95% under physical noise."',
      techStack: [
        { category: 'Mobile & UI', items: 'Android SDK, Java, ViewBinding, Jetpack Navigation' },
        { category: 'Machine Vision', items: 'Google ML Kit Text Recognition API, Android Jetpack CameraX' },
        { category: 'Database & Sync', items: 'Android Room DB (SQLite), Firebase Auth, Cloud Firestore' },
        { category: 'Threading & Workflows', items: 'LiveData, ViewModel, AndroidX WorkManager, Gradle Kotlin DSL' }
      ]
    },
    images: [
      '/projects/slipstack/Home.jpg',
      '/projects/slipstack/Scan & Add.jpg',
      '/projects/slipstack/Split.jpg',
      '/projects/slipstack/Trends.jpg',
      '/projects/slipstack/CSV Import.jpg'
    ],
    section: 'Engineering and Academic Projects',
    filterCategory: 'Mobile'
  },
  {
    id: 'ffsmart',
    title: 'FF Smart Fridge',
    description: 'Native Android IoT-connected grocery management and food safety tracking application utilising CameraX barcode scanning, SQLite/Room persistence, and Firebase database synchronization. It automates HACCP compliance logging and generates predictive restocking lists to reduce commercial food waste.',
    tags: ['Java', 'Android SDK', 'CameraX', 'Google ML Kit', 'Firebase', 'Room DB', 'Mobile Development'],
    github: 'https://github.com/SaaFazal/FF-Smart-Fridge',
    image: '/projects/fridge-app/fridge-app.png',
    
    details: {
      vision: 'FF Smart Fridge is an IoT-connected grocery tracking and compliance management application built natively for Android. The platform features high-speed CameraX barcode scanning to log items, robust SQLite/Room offline datastores, background expiration monitors using Android WorkManager, and real-time synchronization with Google Firebase Firestore.',
      features: [
        'CameraX Barcode Scanning: Direct camera integration with CameraX bound to the activity lifecycle, executing real-time frame scanning with Google ML Kit Barcode Analyser.',
        'Smart Expiration Alerts: Periodic background checks scheduled with Android WorkManager that check the Room database and trigger push notifications for food items approaching their expiration date.',
        'Automated Restock Generator: Background worker that calculates item consumption cycles and generates automated restock/shopping lists based on usage history.',
        'HACCP Food Safety Logs: Digital recording system for temperature checks and environmental parameters, critical for professional food safety compliance.',
        'Offline-First Sync Engine: Full local persistence using Android Room, with automatic multi-device synchronization to Cloud Firestore as soon as internet connectivity is recovered.'
      ],
      deepDive: [
        {
          title: 'Real-Time Machine Vision Barcode Decoder',
          content: 'Built an in-app barcode reader by coupling Android Jetpack CameraX with Google ML Kit Barcode Scanning API. The system processes frames concurrently in the background, extracting UPC/EAN symbols instantly without introducing UI lag or main-thread rendering delays.'
        },
        {
          title: 'Automated Restocking Lifecycle Workers',
          content: 'Implemented periodic WorkManager background tasks running InventoryCheckWorker and OrderGeneratorWorker. These run independently of the application lifecycle, analyzing consumption intervals and compiling structured shopping lists in Room, keeping inventories balanced.'
        },
        {
          title: 'HACCP Compliance & Real-Time Sync',
          content: 'Developed a local-first HACCP logging utility integrated with Firebase Cloud Firestore. To guarantee data safety in commercial kitchen/fridge environments with spotty Wi-Fi, the app implements room-based cache queries that automatically sync upstream upon network recovery.'
        }
      ],
      recruiterWin: '"Built a native Android grocery safety tracker with lifecycle-aware CameraX/ML Kit barcode scanning and automated WorkManager restocking algorithms."',
      techStack: [
        { category: 'Mobile & UI', items: 'Android SDK, Java, ViewBinding, ConstraintLayout' },
        { category: 'Machine Vision', items: 'Google ML Kit Barcode Scanning, Jetpack CameraX' },
        { category: 'Cloud & Database', items: 'Google Firebase Auth, Cloud Firestore, Android Room DB' },
        { category: 'Schedulers & Lifecycle', items: 'AndroidX WorkManager, LiveData, ViewModel, JDK 17 Desugaring' }
      ]
    },
    images: [
      '/projects/fridge-app/Home.jpg',
      '/projects/fridge-app/Barcode Scanner.jpg',
      '/projects/fridge-app/Inventory Management.jpg',
      '/projects/fridge-app/User Management.jpg',
      '/projects/fridge-app/Verify.jpg'
    ],
    section: 'Engineering and Academic Projects',
    filterCategory: 'Mobile'
  }
];

// Shown first, in this order. Add new data projects to the top of this list.
export const featuredOrder = [
  'nhs-ae-performance',
  'demand-forecasting',
  'restaurant-analytics',
  'trukbk-web',
  'phat-ops',
  'arasan-travels',
  'ushop-inventory',
];

// Shown behind the "More projects" button.
export const moreOrder = [
  'ceptflow',
  'dev-insights',
  'ntu-timetable',
  'load-balancer',
  'slipstack',
  'ffsmart',
  'journey-test-suite',
  'uni-chatbot',
  'cyclenest-api',
];
