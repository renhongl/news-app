import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createAuthHeader } from '../shared/utils';
import { URL } from '../shared/url';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUserDetail(username) {
    const url = URL.getUserDetial + username;
    return this.http.get(url);
  }
}
