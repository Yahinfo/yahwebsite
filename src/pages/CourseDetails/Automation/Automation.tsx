import { getCourseById } from '../../../constants/courses';
import CourseDetailsPage from '../CourseDetailsPage';

export default function AutomationPage() {
  return <CourseDetailsPage course={getCourseById('automation')!} />;
}
