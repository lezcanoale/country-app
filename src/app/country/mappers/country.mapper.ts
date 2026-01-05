import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-country.interface';

export class CountryMapper {
  public static mapRestCountryToCountry(item: RESTCountry): Country {
    return {
      cca2: item.cca2,
      flag: item.flag,
      flagsvg: item.flags.svg,
      name: item.name.common,
      capital: item.capital.join(','),
      population: item.population,
    };
  }

  public static mapRestCountryItemsToCountry(items: RESTCountry[]): Country[] {
    return items.map(this.mapRestCountryToCountry);
  }
}
