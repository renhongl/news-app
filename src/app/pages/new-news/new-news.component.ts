import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page-new-news',
  templateUrl: './new-news.component.html',
  styleUrls: ['./new-news.component.scss'],
})
export class NewNewsComponent implements OnInit {

  title: string;
  author: string;
  content: string;
  preViewImg: string;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    @Inject('userService') private userService,
    @Inject('newsService') private newsService
  ) { }

  ngOnInit() {
  }

  uploadImg(e) {
    const file = e.srcElement.files[0];
    this.newsService.uploadImg('news', file).subscribe(result => {
      this.preViewImg = result.imagePath;
    });
  }

  goBack(): void {
    this.navCtrl.navigateBack('/');
  }

  handleTitle(e) {
    this.title = e.target.value;
  }

  handleContent(e) {
    this.content = e.target.value;
  }

  submitNews() {
    const username = this.route.snapshot.paramMap.get('username');
    const postData = {
      title: this.title,
      author: username,
      content: this.content,
      dateTime: new Date().getTime(),
      comment: 0,
      previewImg: this.preViewImg || ''
    };
    this.newsService.createNews(postData).subscribe(result => {
      if (result.code === 200) {
        console.log('Create news successfully');
        this.navCtrl.navigateBack('/');
      }
    });
  }
}
