import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/shared/type';

@Component({
  selector: 'app-module-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  login: any;

  constructor(@Inject('userService') private userService) { }

  ngOnInit() {
    this.userService.login$.subscribe(login => {
      console.log(login);
      this.login = login;
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

}
