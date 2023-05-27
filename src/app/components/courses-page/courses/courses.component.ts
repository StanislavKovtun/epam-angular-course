import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ICourse } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  @Input() coursesList: ICourse[] = [];
  @Output() deleteCouseItem = new EventEmitter<string | number>();

  onCouseDelete(id: number | string | null): void {
    if (id !== null) {
      this.deleteCouseItem.emit(id);
    }
  }

  onLoadMoreClick(): void {
    console.log('Load More');
  }

  trackByCourseId(index: number, course: ICourse): number | string {
    return course.id;
  }
}
