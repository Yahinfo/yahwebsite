import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function JDBC() {
  return <CourseDetailsPage course={getCourseById("jdbc")!} />;
}
