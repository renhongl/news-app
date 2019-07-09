import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/shared/type';
import { addPrefix, updateSession } from 'src/app/shared/utils';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-module-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  login: any;

  constructor(
    @Inject('userService') private userService,
    public navCtrl: NavController,
    public alertController: AlertController,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.userService.login$.subscribe(login => {
      this.login = login;
      if (this.login && this.login.user && this.login.user.avator) {
        this.login.user.avator = addPrefix(this.login.user.avator);
      }
    });
    this.checkLogin();
  }

  checkLogin() {
    const profile = sessionStorage.getItem('aikan');
    if (profile) {
      this.userService.updateLogin(JSON.parse(profile));
    } else {
      this.userService.updateLogin({});
    }
  }

  async handleLogout() {
    const alert = await this.alertController.create({
      header: '注销',
      subHeader: '',
      message: '你确定要注销登陆吗？',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: Logout');
          }
        }, {
          text: '确定',
          handler: () => {
            sessionStorage.removeItem('aikan');
            this.userService.updateLogin({});
          }
        }
      ]
    });

    await alert.present();
  }

  handleAvator(e) {
    const file = e.srcElement.files[0];
    this.userService.uploadImg('avator', file).subscribe(result => {
      this.login.user.avator = addPrefix(addPrefix(result.imagePath));
      const postData = {
        avator: result.imagePath
      };
      this.userService.updateUser(this.login.user._id, postData).subscribe(res => {
        if (res.code === 200) {
          console.log(res.message);
          updateSession('avator', result.imagePath);
        }
      });
    });
  }

  goToMyNews() {
    this.navCtrl.navigateForward(`my-news/${this.login.user.username}`);
  }

  goToProfileUpdate() {
    this.navCtrl.navigateForward(`profile-update`);
  }

}
