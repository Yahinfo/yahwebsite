import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function PHPProgramming() {
  return <CourseDetailsPage course={getCourseById("php-programming")!} />;
}
