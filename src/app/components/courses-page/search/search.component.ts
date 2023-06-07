import { Component } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchValue: string | undefined = undefined;

  onSearchClick(): void {
    console.log(this.searchValue);
  }
}