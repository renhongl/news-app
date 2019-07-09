import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute  } from '@angular/router';
import { addPrefix, translateDate, updateSession } from 'src/app/shared/utils';

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
    @Inject('userService') private userService,
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

  deleteNews(id, e) {
    this.newsService.deleteNews(id).subscribe(result => {
      if (result.code === 200) {
        this.newsList = this.newsList.filter(item => item._id !== id);
        const login = JSON.parse(sessionStorage.getItem('aikan'));
        login.user.news = (login.user.news || 0) - 1;
        const userId = login.user._id;
        const postData = {
          news: login.user.news,
        };
        updateSession('news', login.user.news);
        this.userService.updateLogin(login);
        this.userService.updateUser(userId, postData).subscribe(res => {
          if (res.code === 200) {
            console.log(res.message);
          }
        });
      }
    });
    e.stopPropagation();
  }

}
