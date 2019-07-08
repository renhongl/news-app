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

  getCode(postData) {
    const url = URL.getCode;
    return this.http.post(url, postData);
  }

  register(postData) {
    const url = URL.register;
    return this.http.post(url, postData);
  }

  uploadImg(type, file) {
    const url = URL.uploadFile + type;
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(url, formData);
  }

  updateUser(id, postData) {
    const url = URL.updateUser + id;
    return this.http.put(url, postData);
  }
}
