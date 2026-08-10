export interface Project {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  slug: string;
  // Optional live deployment URL. When present, ProjectCard routes
  // "View Project" to this URL in a new tab; when absent, behavior
  // remains the internal /projects/[slug] route.
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'movie-ticket-booking',
    image: '/images/projects/movie-ticket-booking.jpg',
    imageAlt: 'Movie Ticket Booking Platform',
    category: 'Full-Stack Web Application',
    title: 'Movie Ticket Booking Platform',
    description: 'A modern movie ticket booking platform designed to help users browse movies and select seats through an intuitive experience.',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
  },
  {
    slug: 'business-dashboard',
    image: '/images/projects/business-dashboard.jpg',
    imageAlt: 'Business Dashboard',
    category: 'Business Management',
    title: 'Business Dashboard',
    description: 'A responsive dashboard focused on simplifying data management, reporting, and daily business operations.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    slug: 'ai-productivity-assistant',
    image: '/images/projects/ai-productivity-assistant.jpg',
    imageAlt: 'AI Productivity Assistant',
    category: 'AI Web Application',
    title: 'AI Productivity Assistant',
    description: 'An intelligent web application designed to help automate repetitive tasks using AI-powered features.',
    tags: ['Next.js', 'OpenAI', 'Node.js'],
  },
  {
    slug: 'chit-chat',
    // NOTE: No Chit-Chat-specific image asset exists yet in public/images/projects/.
    // Reusing the Business Dashboard image as a generic placeholder until a real
    // Chit-Chat screenshot is provided. See final report "Out-of-Scope Findings".
    image: '/images/projects/business-dashboard.jpg',
    imageAlt: 'Chit-Chat Real-Time Chat Application',
    category: 'Real-Time Web Application',
    title: 'Chit-Chat',
    description: 'A full-stack real-time chat application with authenticated sessions and persistent messaging.',
    tags: ['Node.js', 'Express', 'Socket.IO'],
    liveUrl: 'https://chit-chat-a-fullstack-chat-app-2.onrender.com/login',
  },
];
