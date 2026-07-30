import { getCourseById } from '../../../constants/courses';
import CourseDetailsPage from '../CourseDetailsPage';

export default function ReactJSPage() {
  return <CourseDetailsPage course={getCourseById('reactjs')!} />;
}
