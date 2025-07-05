// data/all-courses.ts
import { Course } from '@/types/course';
import { teaCourse } from './tea-course';
import { coffeeCourse } from './coffee-course';
import { herbalCourse } from './herb-course';

export const allCourses: Course[] = [teaCourse, coffeeCourse, herbalCourse];
