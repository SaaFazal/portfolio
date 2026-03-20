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
    title: 'Arasan Travels',
    description: 'A full-scale travel management platform featuring automated email workflows, Stripe payment integration, and a sophisticated booking engine. This system transformed traditional operations into a cloud-first experience, handling over 50 secure transactions monthly with zero downtime.',
    tags: ['JavaScript', 'AppScript', 'Stripe API', 'Cloud Infrastructure'],
    link: 'https://www.londonsundaratravels.co.uk',
    image: '/projects/arasan-travels.png',
  },
  {
    id: 'restaurant-ops',
    title: 'Restaurant Operations Suite',
    description: 'A sophisticated dual-platform system for high-volume restaurants. Includes the "Phatbuns" mobile ordering app and a comprehensive "Resto Ops" backend for live order tracking, kitchen display management, and automated staff scheduling. Built for scalability and real-time synchronization.',
    tags: ['Mobile App', 'Node.js', 'Firebase', 'System Architecture'],
    link: '#',
    image: '/projects/restaurant-ops.png',
  },
  {
    id: 'ai-supplychain',
    title: 'AI SupplyChain+',
    description: 'A cutting-edge data science platform designed for supermarket demand forecasting. Utilizing Exponential Smoothing and Moving Average ML models, it accurately predicts inventory needs to drastically reduce food waste and optimize supply chain efficiency.',
    tags: ['Python', 'SQL', 'Data Analytics', 'Machine Learning'],
    link: '#',
    image: '/projects/supply-chain.png',
  },
  {
    id: 'load-balancer',
    title: 'Network Load Balancer Simulation',
    description: 'An advanced architectural simulation of network traffic distribution. Developed a GUI that emulates a high-performance load balancer dispatching requests to Docker-containerized nodes, supporting multiple scheduling algorithms and real-time performance monitoring.',
    tags: ['Java', 'Docker', 'MySQL', 'Simulation Systems'],
    link: '#',
    image: '/projects/load-balancer.png',
  },
  {
    id: 'ffsmart',
    title: 'FF Smart Fridge Ecosystem',
    description: 'An IoT-centric mobile application that automates household inventory. Features real-time product tracking, automated expiry date notifications, and smart shopping list generation based on fridge contents. Designed with a focus on intuitive UX and minimalist UI.',
    tags: ['Mobile App', 'IoT Integration', 'Inventory Management'],
    link: '#',
    image: '/projects/fridge-app.png',
  },
  {
    id: 'cyclenest-api',
    title: 'CycleNest Logistics API',
    description: 'A robust backend infrastructure built for urban cycle logistics. Implemented complex pathfinding algorithms and route optimization logic to streamline delivery networks in high-density areas. Focused on low-latency response times and horizontal scalability.',
    tags: ['Backend Development', 'Java', 'Algorithm Design'],
    link: '#',
    image: '/projects/cyclenest.png',
  },
  {
    id: 'ntu-timetable',
    title: 'Intelligent Timetabling System',
    description: 'An automated scheduling engine designed for academic environments. Solves complex resource allocation problems by mapping classes, students, and physical locations using advanced optimization algorithms to maximize facility utilization and minimize scheduling conflicts.',
    tags: ['C++', 'Optimization', 'Educational Tech'],
    link: '#',
    image: '/projects/ntu-timetable.png',
  },
  {
    id: 'slipstack',
    title: 'SlipStack Data Framework',
    description: 'A modern data handling framework focusing on high-performance stack management and streamlined processing of complex datasets. Designed for developers needing a lightweight, efficient, and type-safe way to handle volatile data structures.',
    tags: ['Full Stack', 'Data Engineering', 'Performance'],
    link: '#',
    image: '/projects/slipstack.png',
  },
];
