import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { TopMenuComponent } from '../../components/top-menu/top-menu';

@Component({
  selector: 'app-country-layout-',
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './country-layout-.html',
})
export class CountryLayoutComponent {}
