import { Component, inject, signal, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { SearchInputComponent } from '../../components/search-input/search-input';
import { CountryListComponet } from '../../components/country-list/country-list';
import { CountryService } from '../../services/country';
import { firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-by-country',
  imports: [SearchInputComponent, CountryListComponet],
  templateUrl: './by-country.html',
})
export class ByCountryComponent {
  countryService = inject(CountryService);
  query = signal<string>('');

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);

      return this.countryService.searchByName(params.query);
    },
  });

  // countryResource = resource({
  //   params: () => ({ query: this.query() }),
  //   loader: async ({ params }) => {
  //     if (!params.query) return [];

  //     return await firstValueFrom(this.countryService.searchByName(params.query));
  //   },
  // });
}
