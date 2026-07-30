import { getCourseById } from '../../../constants/courses';
import CourseDetailsPage from '../CourseDetailsPage';

export default function TestingPage() {
  return <CourseDetailsPage course={getCourseById('testing')!} />;
}
