import type { ISocialLinks } from './socials';
import type { DateInput } from 'src/utils/format-time';

// ----------------------------------------------------------------------

export type ICourseTeacherProp = {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  ratingNumber: number;
  totalCourses: number;
  totalReviews: number;
  totalStudents: number;
};

export type ICourseLessonProp = {
  id: string;
  title: string;
  duration: number;
  videoPath: string;
  unLocked: boolean;
  description: string;
};

export type ICourseByCategoryProps = {
  id: string;
  name: string;
  totalStudents: number;
};

export type ICourseProps = {
  id: string;
  slug: string;
  price: number;
  level: string;
  coverUrl: string;
  category: string;
  skills: string[];
  priceSale: number;
  resources: number;
  totalHours: number;
  description: string;
  languages: string[];
  learnList: string[];
  ratingNumber: number;
  totalQuizzes: number;
  totalReviews: number;
  isBestSeller: boolean;
  createdAt: DateInput;
  totalStudents: number;
  shareLinks: ISocialLinks;
  lessons: ICourseLessonProp[];
  teachers: ICourseTeacherProp[];
};

export type ICourseFiltersProps = {
  keyword: string;
  fee: string[];
  level: string[];
  duration: string[];
  categories: string[];
  rating: string | null;
  language: string[];
};
