import { Component, OnInit, ViewChild, Input, ViewChildren, Inject } from '@angular/core';
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

  constructor(@Inject('subMenuService') private subMenuService) { }

  ngOnInit() {
    this.subMenuService.currentMenu$.subscribe(menu => {
      this.currentMenu = menu;
    });
  }

  slideDidChange(): void {
    this.menuSlideRef.getActiveIndex().then((index: number) => this.subMenuService.updateMenu(index));
  }

  refreshPage() {
    const currentNewsRef = this.newsListRefList.filter((item, index) => index === this.currentMenu)[0];
    currentNewsRef.getNewsList();
  }

}
