import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function CPogramming() {
  return <CourseDetailsPage course={getCourseById("c-programming")!} />;
}
