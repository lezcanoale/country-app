import { Component } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInputComponent {
  onSearch(value: string) {
    console.log(value);
  }
}
