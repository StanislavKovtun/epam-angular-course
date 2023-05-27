import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  // standalone: true,
  // imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchValue: string | undefined = undefined;

  onSearchClick(): void {
    console.log(this.searchValue);
  }
}