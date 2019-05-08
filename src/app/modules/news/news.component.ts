import { Component, OnInit, Inject, Input } from '@angular/core';
import { News } from '../../shared/type';
import { NavController } from '@ionic/angular';
import { translateDate, parseHtml } from '../../shared/utils';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-module-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input() index;

  newsList: Array<News> = [];

  constructor(public navCtrl: NavController, @Inject('newsService') private newsService, public toastController: ToastController) { }

  ngOnInit() {
    this.getChannel();
  }

  async presentToast(len) {
    let messageStr = `为你更新了${len}条新闻。`;
    if (len === 0) {
      messageStr = '暂时没有新的新闻，请休息一会儿。';
    }
    const toast = await this.toastController.create({
      message: messageStr,
      duration: 2000
    });
    toast.present();
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
          previewImg: parseHtml(item.img),
          content: parseHtml(item.html)
        };
      });
      let newsListFilter = newsList.filter(item => {
        return this.newsList.every(ite => {
          return ite.id !== item.id;
        });
      });
      console.log(newsListFilter);
      const updatedList = newsListFilter.concat(this.newsList);
      this.newsList = updatedList;
      this.presentToast(newsListFilter.length);
    });
  }

  pushPage(id: string, channelId: string): void{
    this.navCtrl.navigateForward(`news-detail/${id}-${channelId}`);
  }

}
