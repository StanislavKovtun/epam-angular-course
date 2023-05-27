import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { HeaderComponent } from '../header/header.component';
// import { BreadcrumbsComponent } from '../courses-page/breadcrumbs/breadcrumbs.component';
// import { CoursesComponent } from '../courses/courses.component';
// import { SectionComponent } from '../section/section.component';

import { courses } from 'src/app/shared/mock/courses';
import { ICourse } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'app-courses-page',
  // standalone: true,
  // imports: [
  //   CommonModule,
  //   SectionComponent,
  //   HeaderComponent,
  //   BreadcrumbsComponent,
  //   CoursesComponent,
  // ],
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