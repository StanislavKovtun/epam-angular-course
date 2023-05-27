import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { ICourse } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'app-courses-list-item',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss'],
})
export class CoursesListItemComponent {
  @Input() courseItem: ICourse | undefined = undefined;
  @Output() deleteCourse = new EventEmitter<string | number>();

  onDeleteCouse(course: ICourse | undefined): void {
    const id = course?.id;
    if (id !== undefined) {
      this.deleteCourse.emit(id);
    }
  }
}

