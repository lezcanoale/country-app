import { ByCountryComponent } from './pages/by-country/by-country';
import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page';
import { CountryLayoutComponent } from './layouts/country-layout-/country-layout-';
import { ByRegionComponent } from './pages/by-region/by-region';

export const routes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,
      },
      {
        path: 'by-country',
        component: ByCountryComponent,
      },
      {
        path: 'by-region',
        component: ByRegionComponent,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];
export default routes;
