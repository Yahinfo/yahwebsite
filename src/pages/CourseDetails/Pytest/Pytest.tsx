import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function Pytest() {
  return <CourseDetailsPage course={getCourseById("pytest")!} />;
}
