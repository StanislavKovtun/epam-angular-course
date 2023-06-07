import {ICourse} from '@shared/interfaces/course';

export const courses: ICourse[] = [
  {
    id: 1,
    title: 'HTML',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Learn about where you find course description, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college`s class.They`re published both in course catalog.',
    creationDate: '2023-05-18',
    duration: 120,
  },
  {
    id: 2,
    title: 'CSS',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!',
      creationDate: '2023-05-20',
    duration: 90,
  },
  {
    id: 3,
    title: 'JavaScript',
    description:
      'Test description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!',
      creationDate: '2023-05-21',
    duration: 60,
  },
];
