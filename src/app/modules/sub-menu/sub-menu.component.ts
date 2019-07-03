import { Component, OnInit, ViewChild, Input, ViewChildren } from '@angular/core';
import { SubMenuService } from './sub-menu.service';
import { subMenuMapping } from '../../shared/config';

@Component({
  selector: 'app-core-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
})
export class SubMenuComponent implements OnInit {

  @ViewChild('menuSlideRef') menuSlideRef;
  @ViewChildren('newsListRef') newsListRefList;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  homeSubMenu = subMenuMapping.home;

  currentMenu = 0;

  constructor(private subMenuService: SubMenuService) { }

  ngOnInit() {
    this.subMenuService.menuSubject$.subscribe(menu => {
      debugger;
    });
  }

  slideDidChange(): void {
    debugger;
    this.menuSlideRef.getActiveIndex().then((index: number) => this.subMenuService.updateMenu(index));
  }

  refreshPage() {
    const currentMenu = this.subMenuService.currentMenu;
    const currentNewsRef = this.newsListRefList.filter((item, index) => index === currentMenu)[0];
    currentNewsRef.getChannel(currentMenu);
  }

}
