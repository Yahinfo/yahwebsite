import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function Photoshops() {
  return <CourseDetailsPage course={getCourseById("photoshop")!} />;
}
