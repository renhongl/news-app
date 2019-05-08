import { Component, OnInit, Inject, Input } from '@angular/core';
import { News } from '../../shared/type';
import { NavController } from '@ionic/angular';
import { translateDate } from '../../shared/utils';


@Component({
  selector: 'app-module-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input() index;

  newsList: Array<News> = [];

  constructor(public navCtrl: NavController, @Inject('newsService') private newsService) { }

  ngOnInit() {
    this.getChannel();
  }

  getChannel(index?: number) {
    const channelIndex = index !== undefined ? index : this.index;
    this.newsService.getChannel().subscribe( result => {
      const channelList = result.showapi_res_body.channelList;
      this.getNewsList(channelList[channelIndex].channelId, channelIndex);
    });
  }

  getNewsList(channelId, channelIndex) {
    this.newsService.getNewsList(channelId).subscribe( result => {
      const newsList = result.showapi_res_body.pagebean.contentlist.map((item, index) => {
        return {
          id: item.id,
          channelId: item.channelId,
          title: item.title,
          author: item.source,
          read: item.click_count,
          postDate: translateDate(item.pubDate),
          previewImg: item.img,
          content: item.html
        };
      });
      this.newsList = newsList.reverse().concat(this.newsList);
    });
  }

  pushPage(id: string, channelId: string): void{
    this.navCtrl.navigateForward(`news-detail/${id}-${channelId}`);
  }

}
