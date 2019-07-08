import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-submodule-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  register: boolean;
  email: string;
  code: string;

  constructor(@Inject('userService') private userService) { }

  ngOnInit() {
    this.register = false;
  }

  handleUsername(e) {
    this.username = e.target.value;
  }

  handlePassword(e) {
    this.password = e.target.value;
  }

  handleEmail(e) {
    this.email = e.target.value;
  }

  handleCode(e) {
    this.code = e.target.value;
  }

  handleLogin() {
    this.userService.loginUser(this.username, this.password).subscribe(result => {
      if (result.code === 200) {
        const profile = result.data;
        this.userService.updateLogin(profile);
        sessionStorage.setItem('aikan', JSON.stringify(profile));
      }
    });
  }

  handleRegister() {
    const postData = {
      username: this.username,
      password: this.password,
      mail: this.email,
      code: this.code,
    };
    this.userService.register(postData).subscribe(result => {
      if (result.code === 200) {
        this.register = false;
      }
    });
  }

  getVerifyCode() {
    const postData = {
      mail: this.email,
      username: this.username
    };
    this.userService.getCode(postData).subscribe(result => {
      if(result.code === 200) {
        console.log(result.message);
      }
    });
  }

  goToRegister() {
    this.register = true;
  }

  goToLogin() {
    this.register = false;
  }

}
