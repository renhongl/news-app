import { Component, OnInit, Inject, Input, OnChanges } from '@angular/core';
import { News } from '../../shared/type';
import { NavController } from '@ionic/angular';
import { translateDate, parseHtml, addPrefix } from '../../shared/utils';
import { ToastController } from '@ionic/angular';
import { newsType } from '../../shared/config';

@Component({
  selector: 'app-module-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnChanges {

  @Input() index;
  @Input() currentMenu;

  newsList: Array<News> = [];


  constructor(
    public navCtrl: NavController,
    @Inject('newsService') private newsService,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    this.renderList();
  }

  ngOnChanges() {
    this.renderList();
  }


  renderList() {
    if (this.index === this.currentMenu) {
      this.getNewsList();
    }
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
    this.newsService.getLatestNews(newsType[this.currentMenu]).subscribe(result => {
      let len = 0;
      const currentList = result.data.map(item => {
        return {
          id: item._id,
          title: item.title,
          author: item.author,
          postDate: translateDate(item.dateTime),
          content: item.content,
          previewImg: addPrefix(item.previewImg) || '',
          comment: item.comment || 0,
        };
      });

      currentList.forEach(item => {
        let has = false;
        this.newsList.forEach(curr => {
          if (curr.id === item.id) {
            has = true;
          }
        });
        if (!has) {
          len++;
        }
      });

      this.presentToast(len);
      this.newsList = currentList;
    });
  }

  pushPage(id: string): void {
    this.navCtrl.navigateForward(`news-detail/${id}`);
  }

}
