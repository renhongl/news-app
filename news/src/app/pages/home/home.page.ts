import { Component } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  subMenu = ['推荐', '成都', '热点'];
  subComponent = ['NewsComponent'];
}
