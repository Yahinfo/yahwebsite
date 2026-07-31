import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function ResumePage() {
  return <CourseDetailsPage course={getCourseById("resume")!} />;
}
