import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from 'src/app/shared/type';
import { Observable } from 'rxjs';

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) { }

  getNewsList(): Observable<Array<News>> {
    let url = 'http://api.dagoogle.cn/news/nlist?cid=9';
    return this.http.get<Array<News>>(url);
  }

  getNewsContent(id): Observable<Array<News>> {
    let url = 'http://api.dagoogle.cn/news/ndetail?aid=' + id;
    return this.http.get<Array<News>>(url);
  }
}
