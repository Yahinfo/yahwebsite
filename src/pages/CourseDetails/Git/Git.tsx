import { getCourseById } from '../../../constants/courses';
import CourseDetailsPage from '../CourseDetailsPage';

export default function GitPage() {
  return <CourseDetailsPage course={getCourseById('git')!} />;
}
