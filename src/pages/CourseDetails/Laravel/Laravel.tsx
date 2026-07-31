import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function Laravel() {
  return <CourseDetailsPage course={getCourseById("laravel")!} />;
}
