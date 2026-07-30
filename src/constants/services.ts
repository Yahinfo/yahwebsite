import type { Service, PricingPlan } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'business-website', title: 'Business Website',
    description: 'Professional websites that establish your brand presence and drive business growth.',
    icon: 'FaBuilding', color: '#00E5FF',
    features: ['Responsive Design', 'SEO Optimized', 'Contact Forms', 'Analytics Integration'],
  },
  {
    id: 'portfolio', title: 'Portfolio Website',
    description: 'Stunning portfolio sites that showcase your work and attract clients.',
    icon: 'FaPalette', color: '#8B5CF6',
    features: ['Custom Design', 'Project Gallery', 'Blog Integration', 'Social Links'],
  },
  {
    id: 'web-apps', title: 'Web Applications',
    description: 'Scalable, high-performance web applications built with modern technologies.',
    icon: 'FaGlobe', color: '#FFD700',
    features: ['React/Angular Frontend', 'REST APIs', 'Database Design', 'Cloud Deployment'],
  },
  {
    id: 'react-dev', title: 'React Development',
    description: 'Dynamic, interactive user interfaces with React and modern frontend tools.',
    icon: 'FaReact', color: '#61DAFB',
    features: ['Component Architecture', 'State Management', 'Performance Optimization', 'Testing'],
  },
  {
    id: 'java-dev', title: 'Java Development',
    description: 'Enterprise-grade backend solutions with Java and Spring ecosystem.',
    icon: 'FaJava', color: '#007396',
    features: ['REST APIs', 'Microservices', 'Database Integration', 'Security'],
  },
  {
    id: 'spring-dev', title: 'Spring Boot Development',
    description: 'Robust backend services and microservices with Spring Boot framework.',
    icon: 'SiSpringboot', color: '#6DB33F',
    features: ['API Development', 'Authentication', 'Cloud Ready', 'Documentation'],
  },
  {
    id: 'testing-service', title: 'Software Testing',
    description: 'Comprehensive QA services ensuring your software meets the highest quality standards.',
    icon: 'FaBug', color: '#FF6B6B',
    features: ['Manual Testing', 'Automation Testing', 'Performance Testing', 'Bug Reports'],
  },
  {
    id: 'seo', title: 'SEO Services',
    description: 'Boost your online visibility with data-driven SEO strategies and optimization.',
    icon: 'FaSearch', color: '#00FF99',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Analytics Reports'],
  },
  {
    id: 'maintenance', title: 'Website Maintenance',
    description: 'Keep your website secure, updated, and performing at its best.',
    icon: 'FaTools', color: '#3B82F6',
    features: ['Security Updates', 'Performance Monitoring', 'Content Updates', 'Backup Management'],
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter', name: 'Starter', price: '₹15,000', period: 'one-time',
    features: ['5 Page Website', 'Responsive Design', 'Contact Form', 'Basic SEO', '1 Month Support'],
    color: '#00E5FF',
  },
  {
    id: 'professional', name: 'Professional', price: '₹35,000', period: 'one-time', popular: true,
    features: ['10 Page Website', 'Custom Design', 'CMS Integration', 'Advanced SEO', '3 Months Support', 'Analytics Setup'],
    color: '#8B5CF6',
  },
  {
    id: 'enterprise', name: 'Enterprise', price: '₹75,000', period: 'one-time',
    features: ['Unlimited Pages', 'Web Application', 'API Integration', 'Performance Optimization', '12 Months Support', 'Priority Support'],
    color: '#FFD700',
  },
];
