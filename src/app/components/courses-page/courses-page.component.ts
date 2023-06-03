import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { ICourse } from '@shared/interfaces/course';

import { courses } from '@shared/mock/courses';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit, OnChanges {
  courses: ICourse[] = [];

  constructor() {
    console.log('Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.courses = courses;
  }

  onDeleteCourseItem(id: number | string ): void {
    console.log(id);
  }
}