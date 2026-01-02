import { Component } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input';
import { CountryListComponet } from '../../components/country-list/country-list';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponet],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPageComponent {}
