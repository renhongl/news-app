import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createAuthHeader } from '../../shared/utils';

@Injectable()
export class NewsService {

  appid = 94497;
  certifi = '73d5f543ee9d433a97a26c1bf4ae8e98';

  constructor(private http: HttpClient) { }

  getLatestNews() {
    const url = 'http://localhost:3000/news/latest/20';
    return this.http.get(url, { headers: createAuthHeader() });
  }

  getNewsDetail(id) {
    const url = 'http://localhost:3000/news/' + id;
    return this.http.get(url, { headers: createAuthHeader() });
  }
}
