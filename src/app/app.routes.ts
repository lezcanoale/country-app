import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.routes'), //then(modulo=>modulo.contryRoutes) si es que no se usa el export default,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
