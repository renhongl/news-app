import { Component, OnInit, Input, Inject } from '@angular/core';
import { SubMenu } from '../../shared/type';

@Component({
  selector: 'app-module-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent implements OnInit {

  @Input() items: Array<SubMenu>;

  currentSubMenu: number;

  constructor(@Inject('subMenuService') private subMenuService) { }

  ngOnInit() {
    this.subMenuService.currentMenuSubject.subscribe(menu => {
      this.currentSubMenu = menu;
    });
  }


}
