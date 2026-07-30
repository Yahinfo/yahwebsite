import { getCourseById } from '../../../constants/courses';
import CourseDetailsPage from '../CourseDetailsPage';

export default function JavaPage() {
  return <CourseDetailsPage course={getCourseById('java')!} />;
}
