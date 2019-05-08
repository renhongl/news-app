import { Component, OnInit, Inject } from '@angular/core';
import { News } from '../../shared/type';
import { NavController } from '@ionic/angular';
import { translateDate } from '../../shared/utils';


@Component({
  selector: 'app-module-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsList: Array<News>;

  constructor(public navCtrl: NavController, @Inject('newsService') private newsService) { }

  ngOnInit() {
    this.getNewsList();
  }

  getNewsList() {
    this.newsService.getNewsList().subscribe( result => {
      const newsList = result.data.list.map((item, index) => {
        return {
          id: item.aid,
          title: item.title,
          author: item.writer || item.source,
          read: item.click_count,
          postDate: translateDate(item.pub_time),
          previewImg: item.headpic,
          content: item.url
        };
      });
      this.newsList = newsList;
    });
  }

  pushPage(id: string): void{
    this.navCtrl.navigateForward(`news-detail/${id}`);
  }

}
