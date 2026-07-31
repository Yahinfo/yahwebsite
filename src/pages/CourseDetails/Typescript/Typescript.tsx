import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function TypescriptPage() {
  return <CourseDetailsPage course={getCourseById("typescript")!} />;
}
