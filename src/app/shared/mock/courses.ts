import { ICourse } from '../interfaces/course';

export const courses: ICourse[] = [
  {
    id: 1,
    title: 'Course 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Learn about where you find course description, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college`s class.They`re published both in course catalog.',
    creationDate: '2023-05-18',
    duration: 120,
  },
  {
    id: 2,
    title: 'Course 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!',
      creationDate: '2023-05-20',
    duration: 90,
  },
  {
    id: 3,
    title: 'Course 3',
    description:
      'Test description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!',
      creationDate: '2023-05-21',
    duration: 60,
  },
];
