export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'arasan-travels',
    title: 'Arasan Travels Website',
    description: 'A complete trip-booking system with automated email flows and Stripe payment integration. Streamlined operations for 50+ monthly transactions.',
    tags: ['JavaScript', 'AppScript', 'Stripe API', 'Google Sheets'],
    link: 'https://www.londonsundaratravels.co.uk',
  },
  {
    id: 'ai-supplychain',
    title: 'AI SupplyChain+',
    description: 'Cloud-based AI platform for demand forecasting in supermarkets. Implements Moving Average and Exponential Smoothing models to reduce inventory waste.',
    tags: ['Python', 'SQL', 'Flask', 'Streamlit', 'AI'],
    link: '#',
  },
  {
    id: 'load-balancer',
    title: 'Load Balancer Simulation',
    description: 'GUI-based simulation of load balancing across Docker containers using scheduling algorithms. Features terminal emulation and MySQL integration.',
    tags: ['Java', 'JavaFX', 'Docker', 'MySQL'],
    link: '#',
  },
  {
    id: 'ffsmart',
    title: 'FF Smart Fridge App',
    description: 'Mobile application automating inventory management, product tracking, and expiry notifications for smart fridges.',
    tags: ['Mobile App', 'Inventory', 'Automation'],
    link: '#',
  },
  {
    id: 'fairshift',
    title: 'FairShift',
    description: 'Django-based AI Shift Scheduling Web Application integrating machine learning algorithms for optimized staff scheduling.',
    tags: ['Django', 'Python', 'AI', 'Scheduling'],
    link: '#',
    github: 'https://github.com/SaaFazal/FairShift',
  },
  {
    id: 'restaurant-ops',
    title: 'Restaurant Ops',
    description: 'Comprehensive restaurant management suite including the Phatbuns Mobile App for ordering and Resto Ops for backend operations.',
    tags: ['Mobile App', 'Operations', 'System Design', 'Firebase'],
    link: '#',
  },
  {
    id: 'cyclenest-api',
    title: 'CycleNest API',
    description: 'Backend API for cycle logistics and route optimization.',
    tags: ['API', 'Backend', 'Java'],
    link: '#',
  },
  {
    id: 'ntu-timetable',
    title: 'NTU Timetabling System',
    description: 'Automated timetabling system for scheduling classes and resources.',
    tags: ['C++', 'Algorithms', 'Optimization'],
    link: '#',
  },
  {
    id: 'slipstack',
    title: 'SlipStack',
    description: 'A project focused on efficient stack management and data handling.',
    tags: ['Development', 'Data'],
    link: '#',
  },
];
