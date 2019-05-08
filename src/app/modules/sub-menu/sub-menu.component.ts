import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SubMenuService } from './sub-menu.service';

@Component({
  selector: 'app-core-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
})
export class SubMenuComponent implements OnInit {

  @ViewChild('menuSlide') menuSlide;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private subMenuService: SubMenuService) { }

  ngOnInit() {}

  slideDidChange(): void {
    this.menuSlide.getActiveIndex().then((index: number) => this.subMenuService.updateMenu(index));
  }
 
}
