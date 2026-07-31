import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function InterviewPage() {
  return <CourseDetailsPage course={getCourseById("interview")!} />;
}
