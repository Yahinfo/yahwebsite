import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function CppProgramming() {
  return <CourseDetailsPage course={getCourseById("cpp-programming")!} />;
}
