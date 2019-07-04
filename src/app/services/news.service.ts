import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createAuthHeader } from '../shared/utils';
import { URL } from '../shared/url';

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) { }

  getLatestNews() {
    console.log(URL);
    const url = URL.getLatestNews + '20';
    return this.http.get(url, { headers: createAuthHeader() });
  }

  getNewsDetail(id) {
    const url = URL.getNewsDetail + id;
    return this.http.get(url, { headers: createAuthHeader() });
  }
}
