import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function Numpy() {
  return <CourseDetailsPage course={getCourseById("numpy")!} />;
}
