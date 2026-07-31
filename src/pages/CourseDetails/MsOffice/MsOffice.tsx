import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function MsOfficePage() {
  return <CourseDetailsPage course={getCourseById("ms-office")!} />;
}
