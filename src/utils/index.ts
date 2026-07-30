import {
  FaGraduationCap, FaLaptopCode, FaCogs, FaChalkboardTeacher,
  FaProjectDiagram, FaBriefcase, FaClock, FaCertificate,
  FaBuilding, FaPalette, FaGlobe, FaReact, FaJava, FaBug,
  FaSearch, FaTools, FaRocket, FaUserGraduate, FaFolderOpen,
  FaTasks, FaHandshake, FaFlag, FaCode, FaTrophy,
  FaHtml5, FaJs, FaPython, FaAws, FaRobot, FaGitAlt,
  FaGithub, FaLayerGroup, FaFileAlt, FaUserTie, FaComments,
  FaUsers,
} from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import type { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
  FaGraduationCap, FaLaptopCode, FaCogs, FaChalkboardTeacher,
  FaProjectDiagram, FaBriefcase, FaClock, FaCertificate,
  FaBuilding, FaPalette, FaGlobe, FaReact, FaJava, FaBug,
  FaSearch, FaTools, FaRocket, FaUserGraduate, FaFolderOpen,
  FaTasks, FaHandshake, FaFlag, FaCode, FaTrophy,
  FaHtml5, FaJs, FaPython, FaAws, FaRobot, FaGitAlt,
  FaGithub, FaLayerGroup, FaFileAlt, FaUserTie, FaComments,
  FaUsers, SiSpringboot, SiMysql,
};

export function getIcon(name: string): IconType {
  return iconMap[name] || FaCode;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}
