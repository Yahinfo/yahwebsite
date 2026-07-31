import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function PostgreSQL() {
  return <CourseDetailsPage course={getCourseById("postgresql")!} />;
}
