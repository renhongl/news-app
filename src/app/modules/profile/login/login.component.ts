import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-submodule-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(@Inject('userService') private userService) { }

  ngOnInit() {
    
  }

  handleUsername(e) {
    this.username = e.target.value;
  }

  handlePassword(e) {
    this.password = e.target.value;
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

}
