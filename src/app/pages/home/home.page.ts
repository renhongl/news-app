import { Component } from '@angular/core';
import { subMenu } from './home.data';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  subMenu = subMenu;
}
