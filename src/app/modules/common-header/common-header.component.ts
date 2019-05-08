import { Component, OnInit, Input } from '@angular/core';
import { SubMenuService } from '../sub-menu/sub-menu.service';
import { SubMenu } from '../../shared/type';

@Component({
  selector: 'app-module-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent implements OnInit {

  @Input() items: Array<SubMenu>;

  constructor(private subMenuService: SubMenuService) { }

  ngOnInit() {
    
  }

}
