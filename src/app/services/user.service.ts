import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../shared/url';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {

  login = new BehaviorSubject({});
  login$ = this.login.asObservable();

  constructor(private http: HttpClient) { }

  updateLogin(login) {
    this.login.next(login);
  }

  loginUser(username, password) {
    const url = URL.loginUser;
    const postData = {
      username,
      password,
    };
    return this.http.post(url, postData);
  }

  getUserDetail(username) {
    const url = URL.getUserDetial + username;
    return this.http.get(url);
  }
}
