import { getCourseById } from '../../../constants/courses';
import CourseDetailsPage from '../CourseDetailsPage';

export default function FullStackPage() {
  return <CourseDetailsPage course={getCourseById('fullstack')!} />;
}
