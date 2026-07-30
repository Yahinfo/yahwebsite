import { getCourseById } from '../../../constants/courses';
import CourseDetailsPage from '../CourseDetailsPage';

export default function HTMLCSS() {
  return <CourseDetailsPage course={getCourseById('html-css')!} />;
}
