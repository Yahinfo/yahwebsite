import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function R2DBC() {
  return <CourseDetailsPage course={getCourseById("r2dbc")!} />;
}
