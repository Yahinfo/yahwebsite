import type { StatItem, Partner } from '../types';

export const STATS: StatItem[] = [
  { label: 'Students Trained', value: 5000, suffix: '+' },
  { label: 'Courses Offered', value: 25, suffix: '+' },
  { label: 'Placement Rate', value: 95, suffix: '%' },
  { label: 'Industry Partners', value: 50, suffix: '+' },
];

export const PARTNERS: Partner[] = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
  { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
  { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Industry-Expert Trainers',
    description: 'Learn from professionals with 10+ years of real-world experience at top tech companies.',
    icon: 'FaChalkboardTeacher',
  },
  {
    title: 'Hands-On Projects',
    description: 'Build a portfolio with 15+ real-world projects that impress recruiters and clients.',
    icon: 'FaProjectDiagram',
  },
  {
    title: '100% Placement Support',
    description: 'Dedicated career guidance, mock interviews, resume building, and job referrals.',
    icon: 'FaBriefcase',
  },
  {
    title: 'Flexible Learning',
    description: 'Online and offline batches with recorded sessions and lifetime course access.',
    icon: 'FaClock',
  },
  {
    title: 'Certified Programs',
    description: 'Industry-recognized certificates upon completion to boost your professional profile.',
    icon: 'FaCertificate',
  },
  {
    title: 'Live Internships',
    description: 'Work on real client projects during your internship for practical experience.',
    icon: 'FaLaptopCode',
  },
];
