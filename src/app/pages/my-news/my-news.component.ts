import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute  } from '@angular/router';
import { addPrefix, translateDate } from 'src/app/shared/utils';

@Component({
  selector: 'app-page-my-news',
  templateUrl: './my-news.component.html',
  styleUrls: ['./my-news.component.scss'],
})
export class MyNewsComponent implements OnInit {

  newsList: Array<any>;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    @Inject('newsService') private newsService
  ) {
    this.newsList = [];
  }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    this.newsService.getNewsByAuthor(username).subscribe(result => {
      this.newsList = result.data.map(item => {
        item.previewImg = addPrefix(item.previewImg || '');
        item.dateTime = translateDate(item.dateTime);
        return item;
      });
    });
  }

  goBack(): void {
    this.navCtrl.navigateBack('/tabs/profile');
  }

  showDetail(id) {
    this.navCtrl.navigateForward(`/news-detail/${id}`);
  }

}
