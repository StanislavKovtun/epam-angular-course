import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ICourse } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
})
export class CoursesItemComponent {
  @Input() courseItem: ICourse | undefined = undefined;
  @Output() deleteCourse = new EventEmitter<string | number>();

  onDeleteCouse(course: ICourse | undefined): void {
    const id = course?.id;
    if (id !== undefined) {
      this.deleteCourse.emit(id);
    }
  }
}

