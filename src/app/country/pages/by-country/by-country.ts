import { Component } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input';
import { CountryListComponet } from '../../components/country-list/country-list';

@Component({
  selector: 'app-by-country',
  imports: [SearchInputComponent, CountryListComponet],
  templateUrl: './by-country.html',
})
export class ByCountryComponent {}
