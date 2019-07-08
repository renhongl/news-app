import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/shared/type';
import { addPrefix } from 'src/app/shared/utils';
import { NavController } from '@ionic/angular';


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
    ) { }

  ngOnInit() {
    this.userService.login$.subscribe(login => {
      console.log(login);
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

  handleLogout() {
    sessionStorage.removeItem('aikan');
    this.userService.updateLogin({});
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
          this.updateSession('avator', result.imagePath);
        }
      });
    });
  }

  updateSession(key, value) {
    const auth = sessionStorage.getItem('aikan');
    if (auth) {
      const authObj = JSON.parse(auth);
      authObj.user[key] = value;
      sessionStorage.setItem('aikan', JSON.stringify(authObj));
    }
  }

  goToMyNews() {
    this.navCtrl.navigateForward(`my-news/${this.login.user.username}`);
  }

}
