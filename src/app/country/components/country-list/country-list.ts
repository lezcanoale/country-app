import { Component, input } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-country.interface';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.html',
})
export class CountryListComponet {
  countries = input.required<Country[]>();
}
