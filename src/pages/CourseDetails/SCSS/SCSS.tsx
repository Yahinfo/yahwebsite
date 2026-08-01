import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function SCSS() {
  return <CourseDetailsPage course={getCourseById("scss")!} />;
}
