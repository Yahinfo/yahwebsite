import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import About from "../components/About/About";
import TypescriptPage from "../pages/CourseDetails/Typescript/Typescript";
import ManualTestPage from "../pages/CourseDetails/Manualtesting/Manualtesting";
import ResumePage from "../pages/CourseDetails/Resume/Resume";
import InterviewPage from "../pages/CourseDetails/Interview/Interview";
import MockInterviewPage from "../pages/CourseDetails/MockInterview/MockInterview";
import SoftSkills from "../pages/CourseDetails/SoftSkills/SoftSkills";
import MsOfficePage from "../pages/CourseDetails/MsOffice/MsOffice";
import MsPaint from "../pages/CourseDetails/MsPaint/MsPaint";
import DTP from "../pages/CourseDetails/DTP/DTP";
import Photoshops from "../pages/CourseDetails/Photoshop/Photoshop";
import PHPProgramming from "../pages/CourseDetails/PHPProgramming/PHPProgramming";
import CPogramming from "../pages/CourseDetails/CPogramming/CPogramming";
import CppProgramming from "../pages/CourseDetails/CppProgramming/CppProgramming";
import SCSS from "../pages/CourseDetails/Python/Python";
import Angular from "../pages/CourseDetails/Angular/Angular";
import Node from "../pages/CourseDetails/Node/Node";
import Linux from "../pages/CourseDetails/Linux/Linux";
import Laravel from "../pages/CourseDetails/Laravel/Laravel";
import JDBC from "../pages/CourseDetails/JDBC/JDBC";
import R2DBC from "../pages/CourseDetails/R2DBC/R2DBC";
import PostgreSQL from "../pages/CourseDetails/PostgreSQL/PostgreSQL";
import MongoDB from "../pages/CourseDetails/MongoDB/MongoDB";
import Numpy from "../pages/CourseDetails/MongoDB/MongoDB";
import Pytest from "../pages/CourseDetails/Pytest/Pytest";
import UIUx from "../pages/CourseDetails/UIUx/UIUx";

const Home = lazy(() => import("../pages/Home/Home"));
const Study = lazy(() => import("../pages/Study/Study"));
const Internship = lazy(() => import("../pages/Internship/Internship"));
const Services = lazy(() => import("../pages/Services/Services"));
const Blog = lazy(() => import("../pages/Blog/Blog"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

const HTMLCSS = lazy(() => import("../pages/CourseDetails/HTMLCSS/HTMLCSS"));
const JavaScriptPage = lazy(
  () => import("../pages/CourseDetails/JavaScript/JavaScript"),
);
const ReactJSPage = lazy(
  () => import("../pages/CourseDetails/ReactJS/ReactJS"),
);
const JavaPage = lazy(() => import("../pages/CourseDetails/Java/Java"));
const SpringBootPage = lazy(
  () => import("../pages/CourseDetails/SpringBoot/SpringBoot"),
);
const PythonPage = lazy(() => import("../pages/CourseDetails/Python/Python"));
const AWSPage = lazy(() => import("../pages/CourseDetails/AWS/AWS"));
const TestingPage = lazy(
  () => import("../pages/CourseDetails/Testing/Testing"),
);
const AutomationPage = lazy(
  () => import("../pages/CourseDetails/Automation/Automation"),
);
const MySQLPage = lazy(() => import("../pages/CourseDetails/MySQL/MySQL"));
const GitPage = lazy(() => import("../pages/CourseDetails/Git/Git"));
const GitHubPage = lazy(() => import("../pages/CourseDetails/GitHub/GitHub"));
const FullStackPage = lazy(
  () => import("../pages/CourseDetails/FullStack/FullStack"),
);

function PageLoader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
      }}
    >
      <CircularProgress sx={{ color: "primary.main" }} />
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses/html-css" element={<HTMLCSS />} />
          <Route path="/courses/javascript" element={<JavaScriptPage />} />
          <Route path="/courses/typescript" element={<TypescriptPage />} />
          <Route path="/courses/manual-testing" element={<ManualTestPage />} />
          <Route path="/courses/resume" element={<ResumePage />} />
          <Route path="/courses/interview" element={<InterviewPage />} />
          <Route
            path="/courses/mock-interview"
            element={<MockInterviewPage />}
          />

          <Route path="/courses/ms-office" element={<MsOfficePage />} />
          <Route path="/courses/ms-paint" element={<MsPaint />} />
          <Route path="/courses/dtp" element={<DTP />} />
          <Route path="/courses/photoshop" element={<Photoshops />} />
          <Route path="/courses/php-programming" element={<PHPProgramming />} />
          <Route path="/courses/c-programming" element={<CPogramming />} />
          <Route path="/courses/cpp-programming" element={<CppProgramming />} />
          <Route path="/courses/scss" element={<SCSS />} />
          <Route path="/courses/angular" element={<Angular />} />
          <Route path="/courses/nodejs" element={<Node />} />
          <Route path="/courses/linux" element={<Linux />} />
          <Route path="/courses/laravel" element={<Laravel />} />
          <Route path="/courses/jdbc" element={<JDBC />} />
          <Route path="/courses/r2dbc" element={<R2DBC />} />
          <Route path="/courses/postgresql" element={<PostgreSQL />} />
          <Route path="/courses/mongodb" element={<MongoDB />} />
          <Route path="/courses/numpy" element={<Numpy />} />
          <Route path="/courses/pytest" element={<Pytest />} />
          <Route path="/courses/ui-ux" element={<UIUx />} />

          <Route path="/courses/soft-skills" element={<SoftSkills />} />
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
