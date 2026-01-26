import dayjs from 'dayjs';

import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const TEACHERS = Array.from({ length: 8 }, (_, index) => ({
  id: _mock.id(index),
  totalCourses: 48,
  totalReviews: 3458,
  totalStudents: 18000,
  role: _mock.role(index),
  name: _mock.fullName(index),
  avatarUrl: _mock.image.avatar(index),
  ratingNumber: _mock.number.rating(index),
}));

const LESSONS = Array.from({ length: 9 }, (_, index) => ({
  id: _mock.id(index),
  duration: 60 - index,
  title: `Lesson ${index + 1}`,
  videoPath: _mock.video(index),
  description: _mock.sentence(index),
  unLocked: [0, 1, 2].includes(index),
}));

const getPrice = (index: number) => (index % 2 ? 159.99 : 269.99);

const getPriceSale = (index: number) => {
  if (index === 2) return 89.99;
  if (index === 5) return 69.99;
  return 0;
};

const getTeachers = (index: number) => {
  if (index === 0) return TEACHERS.slice(0, 5);
  if (index === 1) return TEACHERS.slice(3, 7);
  if (index === 2) return TEACHERS.slice(5, 7);
  return [TEACHERS[4]];
};

const getLevel = (index: number) => {
  if (index % 2) return 'Intermediate';
  if (index % 4) return 'Expert';
  if (index % 5) return 'All levels';
  return 'Beginner';
};

const getLearnList = () => [
  'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
  'Vulputate placerat amet pulvinar lorem nisl.',
  'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
  'Etiam duis lobortis in fames ultrices commodo nibh.',
  'Fusce neque. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.',
  'Curabitur a felis in nunc fringilla tristique. Praesent congue erat at massa.',
];

// ----------------------------------------------------------------------

export const _courses = Array.from({ length: 12 }, (_, index) => ({
  id: _mock.id(index),
  resources: 12,
  totalHours: 100,
  lessons: LESSONS,
  totalQuizzes: 100,
  totalReviews: 3458,
  totalStudents: 180000,
  level: getLevel(index),
  category: _tags[index],
  price: getPrice(index),
  skills: _tags.slice(0, 5),
  learnList: getLearnList(),
  teachers: getTeachers(index),
  slug: _mock.courseNames(index),
  priceSale: getPriceSale(index),
  isBestSeller: index === 2 || false,
  coverUrl: _mock.image.course(index),
  createdAt: dayjs(new Date()).format(),
  description: _mock.description(index),
  ratingNumber: _mock.number.rating(index),
  languages: ['English', 'Spanish', 'Chinese'],
  shareLinks: {
    facebook: 'https://facebook.example.com',
    instagram: 'https://instagram.example.com',
    linkedin: 'https://linkedin.example.com',
    twitter: 'https://twitter.example.com',
  },
}));

export const _coursesByCategories = Array.from({ length: 9 }, (_, index) => ({
  id: _mock.id(index),
  name: _tags[index],
  totalStudents: _mock.number.nativeM(index),
}));
