import { Component, OnInit, Input } from '@angular/core';
import { SubMenuService } from '../sub-menu/sub-menu.service';

@Component({
  selector: 'app-module-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent implements OnInit {

  @Input() items;

  constructor(private subMenuService: SubMenuService) { }

  ngOnInit() {
    
  }

}
