import { Component } from '@angular/core';
import { CountryListComponet } from '../../components/country-list/country-list';

@Component({
  selector: 'app-by-region',
  imports: [CountryListComponet],
  templateUrl: './by-region.html',
})
export class ByRegionComponent {}
