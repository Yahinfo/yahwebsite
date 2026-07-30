import { getCourseById } from '../../../constants/courses';
import CourseDetailsPage from '../CourseDetailsPage';

export default function JavaScriptPage() {
  return <CourseDetailsPage course={getCourseById('javascript')!} />;
}
