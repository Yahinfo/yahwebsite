import { getCourseById } from '../../../constants/courses';
import CourseDetailsPage from '../CourseDetailsPage';

export default function MySQLPage() {
  return <CourseDetailsPage course={getCourseById('mysql')!} />;
}
