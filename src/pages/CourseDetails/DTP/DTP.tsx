import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function DTP() {
  return <CourseDetailsPage course={getCourseById("dtp")!} />;
}
