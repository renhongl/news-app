import { Component, OnInit, Input, Inject } from '@angular/core';
import { SubMenu } from '../../shared/type';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-module-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent implements OnInit {

  @Input() items: Array<SubMenu>;
  currentSubMenu: number;

  constructor(
    @Inject('subMenuService') private subMenuService, 
    public navCtrl: NavController,
    @Inject('userService') private userService
    ) { }

  ngOnInit() {
    this.subMenuService.currentMenu$.subscribe(menu => {
      this.currentSubMenu = menu;
    });
  }

  goToPublish() {
    const auth = sessionStorage.getItem('aikan');
    if (auth) {
      this.navCtrl.navigateForward(`new-news/${JSON.parse(auth).user.username}`);
    } else {
      this.navCtrl.navigateForward('/tabs/profile');
    }
  }

}
