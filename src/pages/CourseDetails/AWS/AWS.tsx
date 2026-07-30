import { getCourseById } from '../../../constants/courses';
import CourseDetailsPage from '../CourseDetailsPage';

export default function AWSPage() {
  return <CourseDetailsPage course={getCourseById('aws')!} />;
}
