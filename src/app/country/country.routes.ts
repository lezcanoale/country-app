import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page';
import { CountryLayoutComponent } from './layouts/country-layout-/country-layout-';

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
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
  // {
  //   path: 'country',
  //   // component:
  // },
];
export default routes;
