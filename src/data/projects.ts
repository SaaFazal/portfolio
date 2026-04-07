export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'arasan-travels',
    title: 'Arasan Travels',
    description: 'A professional travel management platform featuring automated booking workflows and real-time flight/hotel synchronization. Fully branded for Arasan Travels with a cloud-first infrastructure. Built an end-to-end booking pipeline integrating Google Forms and Apps Script. Do you want to see more of this project? Contact me.',
    tags: ['React', 'Next.js', 'API Integration', 'Cloud Systems'],
    link: 'http://www.arasantravels.co.uk',
    image: '/projects/arasan-travels.png',
  },
  {
    id: 'phat-bot',
    title: 'Phat Bot',
    description: 'Phat Bot is a comprehensive management solution for high-volume restaurants. Centralizes staff scheduling, multi-unit task management, and digital shift logs to streamline daily operations and labor efficiency. Implemented auth and database integration with Supabase for real-time tracking.',
    tags: ['Next.js', 'Node.js', 'Operations'],
    link: '/privacy-policy',
    linkLabel: 'Privacy Policy',
    image: '/projects/restaurant-ops.png',
  },
  {
    id: 'ushop-inventory',
    title: 'U-Shop Inventory Hub',
    description: 'Advanced inventory management system with real-time stock sync via custom webhooks. Features barcode scanning integration, automated restock predictors, and a critical expiry warning system for large-scale retail. Developed during my tenure as Data Analyst and Admin Manager. Do you want to see more of this project? Contact me.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Inventory'],
    link: '#',
    image: '/projects/ushop-inventory.png',
  },
  {
    id: 'ucafe-till',
    title: 'U-Café Till System',
    description: 'Multi-channel EPOS solution designed for a premium "Green Grounds" aesthetic. Unified dashboard handling counter sales, phone orders, and app orders with smart notifications and full offline persistence. Engineered for custom cafe requirements in mobile environments. Do you want to see more of this project? Contact me.',
    tags: ['React', 'EPOS', 'Local Persistence', 'UI/UX'],
    link: '#',
    image: '/projects/ucafe-till.png',
  },
  {
    id: 'trukbk-web',
    title: 'TRUKBK Transformation',
    description: 'Lead digital architectural modification for TRUKBK. "Engineered for Dominance" - Implemented a high-contrast industrial design system, custom vehicle parts configurator, and corporate typography. Focused on performance and industrial-grade aesthetics. Do you want to see more of this project? Contact me.',
    tags: ['Vite', 'Industrial Design', 'Tailwind CSS', 'Supabase'],
    link: 'https://truckbk.vercel.app/',
    image: '/projects/trukbk-web.webp',
  },
  {
    id: 'ai-supplychain',
    title: 'AI SupplyChain+',
    description: 'Intelligent demand forecasting engine that analyzes historical sales data to predict future inventory needs. Reduced stockouts by 30% through automated trend detection and seasonal adjustment algorithms using Moving Average and Exponential Smoothing models. Do you want to see more of this project? Contact me.',
    tags: ['Python', 'Flask', 'Time-Series', 'Data Science'],
    link: '#',
    image: '/projects/supply-chain.png',
  },
  {
    id: 'slipstack',
    title: 'SlipStack Framework',
    description: 'A secure, high-tech fintech application specializing in receipt scanning and data extraction. Uses advanced OCR and data categorization to help users manage expenses with bank-grade security and MERN stack architecture. Do you want to see more of this project? Contact me.',
    tags: ['Typescript', 'OCR', 'Security', 'Fintech'],
    link: '#',
    image: '/projects/slipstack.png',
  },
  {
    id: 'ffsmart',
    title: 'FF Smart Fridge',
    description: 'IoT-connected household application that tracks grocery inventory in real-time. Sends proactive expiration alerts and automatically generates shopping lists based on usage patterns. Implemented barcode scanning via ML Kit and local persistence with Room. Do you want to see more of this project? Contact me.',
    tags: ['React Native', 'Expo', 'IoT', 'Mobile Development'],
    link: '#',
    image: '/projects/fridge-app.png',
  },
  {
    id: 'ntu-timetable',
    title: 'NTU Timetabling System',
    description: 'Sophisticated scheduling algorithm for university environments. Optimizes room allocation and lecture times for thousands of students, ensuring zero conflicts and efficient campus resource utilization. Built using C# and .NET frameworks. Do you want to see more of this project? Contact me.',
    tags: ['C#', '.NET', 'Algorithm', 'Optimization'],
    link: '#',
    image: '/projects/ntu-timetable.png',
  },
  {
    id: 'cyclenest-api',
    title: 'CycleNest API',
    description: 'High-performance backend for a bike-sharing logistics network. Built with a focus on low-latency route calculations, real-time fleet tracking, and automated deployment pipelines using JAX-RS and Cosmos DB. Do you want to see more of this project? Contact me.',
    tags: ['Java', 'Spring Boot', 'Docker', 'GIS'],
    link: '#',
    image: '/projects/cyclenest.png',
  },
  {
    id: 'load-balancer',
    title: 'Network Load Balancer',
    description: 'A low-level simulation of high-traffic server distribution. Implements Round Robin and Least Connections algorithms to demonstrate robust architecture and fault-tolerant delivery using JavaFX for visualization. Do you want to see more of this project? Contact me.',
    tags: ['Golang', 'Networking', 'Simulation', 'System Design'],
    link: '#',
    image: '/projects/load-balancer.png',
  },
];
