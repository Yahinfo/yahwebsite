import { getCourseById } from '../../../constants/courses';
import CourseDetailsPage from '../CourseDetailsPage';

export default function PythonPage() {
  return <CourseDetailsPage course={getCourseById('python')!} />;
}
