import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function ManualTestPage() {
  return <CourseDetailsPage course={getCourseById("manual-testing")!} />;
}
