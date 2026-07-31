import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function MockInterviewPage() {
  return <CourseDetailsPage course={getCourseById("mock-interview")!} />;
}
