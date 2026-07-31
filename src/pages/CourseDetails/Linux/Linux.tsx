import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function Linux() {
  return <CourseDetailsPage course={getCourseById("linux")!} />;
}
