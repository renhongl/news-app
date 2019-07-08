import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { addPrefix } from 'src/app/shared/utils';

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
  images: Array<string>;
  type: string;

  @ViewChild('preViewCon') preViewCon;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    @Inject('userService') private userService,
    @Inject('newsService') private newsService
  ) {
    this.images = [];
    this.type = 'internal';
  }

  ngOnInit() {
  }

  uploadImg(e) {
    const file = e.srcElement.files[0];
    this.newsService.uploadImg('news', file).subscribe(result => {
      this.preViewImg = result.imagePath;
      this.appendPreview(this.preViewImg);
      this.images.push(this.preViewImg);
    });
  }

  appendPreview(path) {
    const img = document.createElement('img');
    img.setAttribute('src', addPrefix(path));
    img.style.width = '90px';
    img.style.height = '90px';
    img.style.marginRight = '5px';
    this.preViewCon.nativeElement.prepend(img);
  }

  goBack(): void {
    this.navCtrl.navigateBack('/');
  }

  handleType(e) {
    this.type = e.target.value;
  }

  handleTitle(e) {
    this.title = e.target.value;
  }

  handleContent(e) {
    this.content = e.target.value;
  }

  handleError(e) {
    console.log(e);
  }

  submitNews() {
    const username = this.route.snapshot.paramMap.get('username');
    const postData = {
      title: this.title,
      author: username,
      content: this.content,
      dateTime: new Date().getTime(),
      comment: 0,
      previewImg: this.preViewImg || '',
      images: this.images,
      type: this.type,
    };
    this.newsService.createNews(postData).subscribe(result => {
      if (result.code === 200) {
        console.log('Create news successfully');
        this.navCtrl.navigateBack('/');
      }
    });
  }
}
