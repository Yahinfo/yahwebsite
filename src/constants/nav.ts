import type { NavItem, MegaMenuItem } from "../types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Blog", path: "/blog" },
  { label: "Plans", path: "#", hasMegaMenu: true },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const MEGA_MENU_ITEMS: MegaMenuItem[] = [
  {
    title: "Study Programs",
    description:
      "Master in-demand tech skills with expert-led courses and hands-on projects.",
    path: "/study",
    icon: "FaGraduationCap",
    gradient: "linear-gradient(135deg, #00E5FF 0%, #3B82F6 100%)",
  },
  {
    title: "Internship",
    description:
      "Gain real-world experience with live client projects and industry mentors.",
    path: "/internship",
    icon: "FaLaptopCode",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
  },
  {
    title: "IT Services",
    description:
      "Professional web development, testing, SEO, and maintenance solutions.",
    path: "/services",
    icon: "FaCogs",
    gradient: "linear-gradient(135deg, #FFD700 0%, #F97316 100%)",
  },
];

export const COMPANY = {
  name: "YahTecInfo",
  tagline: "Empowering Future Tech Leaders",
  email: "yahtechinfo23@gmail.com",
  phone: "+91 7200101273",
  address: "123 Tech Park, Innovation Hub, Bangalore, Karnataka 560001",
  social: {
    facebook: "https://www.facebook.com/share/196qksR4J2/",
    twitter: "https://twitter.com/yahtecinfo",
    linkedin: "https://linkedin.com/company/yahtecinfo",
    instagram: "https://www.instagram.com/yahtechinfo?igsh=dmR3MGNuanJycm5i",
    youtube: "https://youtube.com/yahtecinfo",
    whatsapp: "https://wa.me/917200101273",
  },
};
