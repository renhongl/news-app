import { Component, OnInit, Inject, Input, OnChanges } from '@angular/core';
import { News } from '../../shared/type';
import { NavController } from '@ionic/angular';
import { translateDate, parseHtml } from '../../shared/utils';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-module-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnChanges {

  @Input() index;
  @Input() currentMenu;

  newsList: Array<News> = [];

  constructor(public navCtrl: NavController, @Inject('newsService') private newsService, public toastController: ToastController, @Inject('subMenuService') private subMenuService) { }

  ngOnInit() {
    if (this.index === this.currentMenu) {
      this.getNewsList();
    }
  }

  ngOnChanges() {
    debugger;
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

  getNewsList() {
    this.newsService.getLatestNews().subscribe(result => {
      this.newsList = result.data.map(item => {
        return {
          id: item._id,
          title: item.title,
          author: item.author,
          postDate: translateDate(item.dateTime),
          content: item.content
        };
      });
    });
  }

  pushPage(id: string): void {
    this.navCtrl.navigateForward(`news-detail/${id}`);
  }

}
