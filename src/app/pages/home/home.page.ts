import { Component, ViewChild } from '@angular/core';
import { subMenu } from './home.data';
import { subMenuMapping } from '../../shared/config';


@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  @ViewChild('subMenuRef') subMenuRef;
  subMenu = subMenuMapping.home;

  doRefresh(event) {
    this.subMenuRef.refreshPage();

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
