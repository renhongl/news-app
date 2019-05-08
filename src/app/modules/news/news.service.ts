import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from 'src/app/shared/type';
import { Observable } from 'rxjs';

@Injectable()
export class NewsService {

  appid = 94497;
  certifi = '73d5f543ee9d433a97a26c1bf4ae8e98';

  constructor(private http: HttpClient) { }

  getChannel() {
    let url = `https://route.showapi.com/109-34?showapi_appid=${this.appid}&showapi_sign=${this.certifi}`;
    return this.http.get(url);
  }

  getNewsList(channelId): Observable<Array<News>> {
    let url = `https://route.showapi.com/109-35?showapi_appid=${this.appid}&showapi_sign=${this.certifi}&channelId=${channelId}&needHtml=1`;
    return this.http.get<Array<News>>(url);
  }
}
