import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function Node() {
  return <CourseDetailsPage course={getCourseById("nodejs")!} />;
}
