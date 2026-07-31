import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function Angular() {
  return <CourseDetailsPage course={getCourseById("angular")!} />;
}
