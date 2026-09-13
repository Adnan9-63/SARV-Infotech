export const featuredProjects = [
  { id: 'proj-1', title: 'Sentinel', subtitle: 'Razorpay AI Buildathon', category: 'AI / Backend', description: 'Coordinated Abuse-Ring & Fraud-Spike Detector. Built an ML ensemble with graph-based clustering, reaching 100% precision.', tags: ['Isolation Forest', 'Gradient Boosting', 'LLM', 'MCP'], badge: { label: 'Featured', variant: 'primary' }, actions: [{ label: 'GitHub', url: '#', type: 'outline' }], icon: 'Shield' },
  { id: 'proj-2', title: 'ClassroomAI Monitor', subtitle: '1st Place, BYTEHACK', category: 'Computer Vision', description: 'Real-time classroom engagement system combining YOLOv8, MediaPipe, and Whisper into one pipeline.', tags: ['YOLOv8', 'FastAPI', 'React', 'Whisper'], badge: { label: 'Winner', variant: 'success' }, actions: [{ label: 'GitHub', url: '#', type: 'outline' }], icon: 'Monitor' }
];

export const allProjects = [
  ...featuredProjects,
  { id: 'proj-3', title: 'CampusGigs', subtitle: '1st Place, Science Mela', category: 'Full-Stack', description: 'Peer-to-peer student gig marketplace with simulated UPI wallet and real-time negotiation chat.', tags: ['React', 'WebSockets', 'Gemini'], actions: [{ label: 'GitHub', url: '#', type: 'outline' }], icon: 'Briefcase' },
  { id: 'proj-4', title: 'AI ATS Resume System', subtitle: 'Active Development', category: 'AI / Backend', description: 'Hybrid resume-to-job-description matcher using TF-IDF/BM25 and LLM feedback layer.', tags: ['FastAPI', 'React', 'Supabase'], actions: [{ label: 'GitHub', url: '#', type: 'outline' }], icon: 'FileText' },
  { id: 'proj-5', title: '300 Days of AI/ML', subtitle: 'Day 191/300', category: 'Machine Learning', description: 'Public, daily-tracked ML learning log spanning data foundations to deep learning.', tags: ['PyTorch', 'Scikit-Learn', 'NumPy'], actions: [{ label: 'GitHub', url: '#', type: 'outline' }], icon: 'Brain' }
];

export const skillsCategories = [
  { id: 'skill-1', title: 'Languages', description: 'Core programming languages I use daily.', category: 'Languages', tags: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'], icon: 'Code' },
  { id: 'skill-2', title: 'AI / ML', description: 'Deep learning, statistical models, and vision.', category: 'AI', tags: ['PyTorch', 'Scikit-learn', 'YOLOv8', 'Whisper', 'Pandas'], icon: 'Brain' },
  { id: 'skill-3', title: 'Backend / Web', description: 'Building scalable APIs and modern interfaces.', category: 'Backend', tags: ['FastAPI', 'React', 'Node.js', 'PostgreSQL', 'Docker'], icon: 'Server' },
  { id: 'skill-4', title: 'Applied Security', description: 'CTFs, prompt-injection defense, secure design.', category: 'Security', tags: ['CTF', 'Cryptography', 'OSINT', 'Audit Trails'], icon: 'ShieldAlert' }
];

export const statsData = [
  { label: 'Hackathon Wins', value: '4+' },
  { label: 'Days of ML', value: '191+' },
  { label: 'Projects', value: '10+' },
  { label: 'Technologies', value: '15+' }
];
