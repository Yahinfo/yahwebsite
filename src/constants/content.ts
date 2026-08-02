import type { Testimonial, FAQItem, BlogPost } from "../types";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "React Developer",
    company: "Google",
    content:
      "YahTecInfo transformed my career. The React course was incredibly detailed, and the placement support helped me land my dream job at Google within 3 months of completion.",
    rating: 5,
    avatar: "PS",
  },
  {
    id: "2",
    name: "Rahul Verma",
    role: "Full Stack Developer",
    company: "Amazon",
    content:
      "The full stack program gave me everything I needed. Real projects, expert mentors, and mock interviews prepared me perfectly for the industry. Highly recommended!",
    rating: 5,
    avatar: "RV",
  },
  {
    id: "3",
    name: "Ananya Patel",
    role: "QA Engineer",
    company: "Microsoft",
    content:
      "From zero testing knowledge to a QA role at Microsoft in 6 months. The automation course and internship program were game-changers for my career.",
    rating: 5,
    avatar: "AP",
  },
  {
    id: "4",
    name: "Karthik Reddy",
    role: "Java Developer",
    company: "TCS",
    content:
      "The Java and Spring Boot courses are world-class. Hands-on projects and industry-relevant curriculum made the transition from fresher to developer seamless.",
    rating: 4,
    avatar: "KR",
  },
  {
    id: "5",
    name: "Sneha Gupta",
    role: "Cloud Engineer",
    company: "Accenture",
    content:
      "AWS course with practical labs was exactly what I needed. The instructors are patient, knowledgeable, and always available for doubt clearing.",
    rating: 5,
    avatar: "SG",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "What courses does YahTecInfo offer?",
    answer:
      "We offer 25+ courses covering Frontend (HTML, CSS, JavaScript, React), Backend (Java, Spring Boot, Python), Cloud (AWS), Testing, Databases, DevOps, and Career Development programs.",
  },
  {
    question: "Are the courses available online?",
    answer:
      "Yes! All our courses are available in both online and offline modes. Online students get live sessions, recorded backups, and lifetime access to course materials.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Absolutely. We provide 100% placement support including resume building, mock interviews, aptitude training.",
  },
  {
    question: "What is the duration of courses?",
    answer:
      "Course duration varies depending on the program. Each course is designed with a structured curriculum to ensure comprehensive learning and practical skill development.",
  },
  // {
  //   question: "Can I get a refund if I am not satisfied?",
  //   answer:
  //     "Yes, we offer a 7-day money-back guarantee. If you are not satisfied with the course within the first week, you can request a full refund.",
  // },
  {
    question: "Do you offer internship programs?",
    answer:
      "Yes! Our internship program includes live client projects, daily tasks, mentor guidance, portfolio building, and placement support. Apply through our Internship page.",
  },
  {
    question: "What IT services do you provide?",
    answer:
      "We offer website development, web applications, React/Java/Spring Boot development, software testing, SEO services, and website maintenance for businesses of all sizes.",
  },
  {
    question: "Are certificates provided upon completion?",
    answer:
      "Yes, all students receive industry-recognized certificates upon successful completion of courses and final project assessments.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Top 10 Programming Languages to Learn in 2026",
    excerpt:
      "Discover the most in-demand programming languages that will dominate the tech industry this year and beyond.",
    category: "Career",
    author: "YahTecInfo Team",
    date: "2026-07-15",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    tags: ["Programming", "Career", "2026"],
    featured: true,
  },
  {
    id: "2",
    title: "Cybersecurity Best Practices for Developers",
    excerpt:
      "Essential security practices every developer should implement to protect applications from common vulnerabilities.",
    category: "Security",
    author: "Security Team",
    date: "2026-07-10",
    readTime: "12 min",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c758f4?w=800&q=80",
    tags: ["Security", "Development", "Best Practices"],
  },
  {
    id: "3",
    title: "React 19: What is New and Why It Matters",
    excerpt:
      "A comprehensive guide to React 19 features including Server Components, Actions, and the new compiler.",
    category: "Frontend",
    author: "Frontend Team",
    date: "2026-07-05",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    tags: ["React", "JavaScript", "Frontend"],
  },
  {
    id: "4",
    title: "How to Crack Your First Tech Interview",
    excerpt:
      "Proven strategies and tips from industry experts to help you ace your first technical interview.",
    category: "Career",
    author: "Career Team",
    date: "2026-06-28",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    tags: ["Interview", "Career", "Tips"],
  },
  {
    id: "5",
    title: "AWS Cloud Architecture Patterns",
    excerpt:
      "Learn the most common and effective cloud architecture patterns used in production AWS environments.",
    category: "Cloud",
    author: "Cloud Team",
    date: "2026-06-20",
    readTime: "15 min",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["AWS", "Cloud", "Architecture"],
  },
  {
    id: "6",
    title: "The Future of AI in Software Testing",
    excerpt:
      "Explore how artificial intelligence is revolutionizing software testing and quality assurance processes.",
    category: "Testing",
    author: "QA Team",
    date: "2026-06-15",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["AI", "Testing", "Automation"],
  },
];

export const BLOG_CATEGORIES = [
  "All",
  "Career",
  "Security",
  "Frontend",
  "Cloud",
  "Testing",
  "Backend",
];
