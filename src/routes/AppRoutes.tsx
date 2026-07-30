import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import MainLayout from '../layouts/MainLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Study = lazy(() => import('../pages/Study/Study'));
const Internship = lazy(() => import('../pages/Internship/Internship'));
const Services = lazy(() => import('../pages/Services/Services'));
const Blog = lazy(() => import('../pages/Blog/Blog'));
const Contact = lazy(() => import('../pages/Contact/Contact'));

const HTMLCSS = lazy(() => import('../pages/CourseDetails/HTMLCSS/HTMLCSS'));
const JavaScriptPage = lazy(() => import('../pages/CourseDetails/JavaScript/JavaScript'));
const ReactJSPage = lazy(() => import('../pages/CourseDetails/ReactJS/ReactJS'));
const JavaPage = lazy(() => import('../pages/CourseDetails/Java/Java'));
const SpringBootPage = lazy(() => import('../pages/CourseDetails/SpringBoot/SpringBoot'));
const PythonPage = lazy(() => import('../pages/CourseDetails/Python/Python'));
const AWSPage = lazy(() => import('../pages/CourseDetails/AWS/AWS'));
const TestingPage = lazy(() => import('../pages/CourseDetails/Testing/Testing'));
const AutomationPage = lazy(() => import('../pages/CourseDetails/Automation/Automation'));
const MySQLPage = lazy(() => import('../pages/CourseDetails/MySQL/MySQL'));
const GitPage = lazy(() => import('../pages/CourseDetails/Git/Git'));
const GitHubPage = lazy(() => import('../pages/CourseDetails/GitHub/GitHub'));
const FullStackPage = lazy(() => import('../pages/CourseDetails/FullStack/FullStack'));

function PageLoader() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <CircularProgress sx={{ color: 'primary.main' }} />
    </Box>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/study" element={<Study />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses/html-css" element={<HTMLCSS />} />
          <Route path="/courses/javascript" element={<JavaScriptPage />} />
          <Route path="/courses/reactjs" element={<ReactJSPage />} />
          <Route path="/courses/java" element={<JavaPage />} />
          <Route path="/courses/springboot" element={<SpringBootPage />} />
          <Route path="/courses/python" element={<PythonPage />} />
          <Route path="/courses/aws" element={<AWSPage />} />
          <Route path="/courses/testing" element={<TestingPage />} />
          <Route path="/courses/automation" element={<AutomationPage />} />
          <Route path="/courses/mysql" element={<MySQLPage />} />
          <Route path="/courses/git" element={<GitPage />} />
          <Route path="/courses/github" element={<GitHubPage />} />
          <Route path="/courses/fullstack" element={<FullStackPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
