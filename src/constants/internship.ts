import type { InternshipBenefit, Mentor, TimelineItem } from '../types';

export const INTERNSHIP_BENEFITS: InternshipBenefit[] = [
  { title: 'Live Client Projects', description: 'Work on real projects for actual clients, building your portfolio with production-grade code.', icon: 'FaRocket' },
  { title: 'Industry Certificate', description: 'Receive a recognized internship certificate upon successful completion of the program.', icon: 'FaCertificate' },
  { title: 'Expert Mentors', description: 'Get guidance from senior developers with 10+ years of industry experience.', icon: 'FaUserGraduate' },
  { title: 'Portfolio Building', description: 'Build a professional portfolio with 5+ projects to showcase to potential employers.', icon: 'FaFolderOpen' },
  { title: 'Daily Tasks', description: 'Structured daily assignments that simulate real workplace scenarios and deadlines.', icon: 'FaTasks' },
  { title: 'Placement Guidance', description: 'Dedicated career counseling, resume reviews, and direct job referrals.', icon: 'FaHandshake' },
];

export const MENTORS: Mentor[] = [
  { name: 'Dr. Rajesh Kumar', role: 'Senior Architect', expertise: 'Full Stack & Cloud', avatar: 'RK' },
  { name: 'Sarah Johnson', role: 'Lead Developer', expertise: 'React & Node.js', avatar: 'SJ' },
  { name: 'Amit Desai', role: 'QA Director', expertise: 'Testing & Automation', avatar: 'AD' },
  { name: 'Lisa Chen', role: 'Cloud Specialist', expertise: 'AWS & DevOps', avatar: 'LC' },
];

export const INTERNSHIP_TIMELINE: TimelineItem[] = [
  { title: 'Week 1-2: Orientation', description: 'Introduction to tools, workflows, and team collaboration practices.', icon: 'FaFlag' },
  { title: 'Week 3-6: Foundation Projects', description: 'Build foundational projects under mentor supervision.', icon: 'FaCode' },
  { title: 'Week 7-10: Client Projects', description: 'Work on live client projects with real deadlines and requirements.', icon: 'FaLaptopCode' },
  { title: 'Week 11-12: Portfolio & Placement', description: 'Finalize portfolio, mock interviews, and placement preparation.', icon: 'FaTrophy' },
];

export const DAILY_TASKS = [
  'Morning standup meeting with team',
  'Work on assigned project tasks',
  'Code review and feedback session',
  'Learning module completion',
  'End-of-day progress report',
  'Peer collaboration activities',
];
