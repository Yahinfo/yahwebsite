import { getCourseById } from '../../../constants/courses';
import CourseDetailsPage from '../CourseDetailsPage';

export default function SpringBootPage() {
  return <CourseDetailsPage course={getCourseById('springboot')!} />;
}
