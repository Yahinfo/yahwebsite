import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function UIUx() {
  return <CourseDetailsPage course={getCourseById("ui-ux")!} />;
}
