import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { courses } from 'src/app/shared/mock/courses';
import { ICourse } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit, OnChanges {
  coursesArray: ICourse[] = [];

  constructor() {
    console.log('Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.coursesArray = courses;
  }

  onDeleteCourseItem(id: number | string | undefined): void {
    console.log(id);
  }
}