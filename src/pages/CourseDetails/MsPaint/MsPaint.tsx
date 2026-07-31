import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function MsPaint() {
  return <CourseDetailsPage course={getCourseById("ms-paint")!} />;
}
