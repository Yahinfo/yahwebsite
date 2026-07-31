import { getCourseById } from "../../../constants/courses";
import CourseDetailsPage from "../CourseDetailsPage";

export default function SoftSkills() {
  return <CourseDetailsPage course={getCourseById("soft-skills")!} />;
}
