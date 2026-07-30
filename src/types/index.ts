export interface NavItem {
  label: string;
  path: string;
  hasMegaMenu?: boolean;
}

export interface MegaMenuItem {
  title: string;
  description: string;
  path: string;
  icon: string;
  gradient: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  shortDescription: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  students: number;
  price: string;
  icon: string;
  color: string;
  modules: CourseModule[];
  projects: string[];
  tools: string[];
  career: string[];
  requirements: string[];
  faqs: FAQItem[];
}

export interface CourseModule {
  title: string;
  topics: string[];
  duration: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface TimelineItem {
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
}

export interface InternshipBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface Mentor {
  name: string;
  role: string;
  expertise: string;
  avatar: string;
}
