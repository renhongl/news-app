import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createAuthHeader } from '../shared/utils';
import { URL } from '../shared/url';

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) { }

  getLatestNews(type) {
    console.log(URL);
    const url = URL.getLatestNews + type;
    return this.http.get(url, { headers: createAuthHeader() });
  }

  getNewsDetail(id) {
    const url = URL.getNewsDetail + id;
    return this.http.get(url, { headers: createAuthHeader() });
  }

  createNews(postData) {
    const url = URL.createNews;
    return this.http.post(url, postData);
  }

  uploadImg(type, file) {
    const url = URL.uploadFile + type;
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(url, formData);
  }
}
