export interface Project {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  slug: string;
  // Optional live deployment URL. When present, ProjectCard shows a
  // "View Live Project" link that opens this URL in a new tab.
  liveUrl?: string;
  // Optional source-code repository URL. When present, ProjectCard shows
  // a "View Code" link that opens this URL in a new tab.
  repoUrl?: string;
}

export const projects: Project[] = [
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
