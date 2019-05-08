import { Component, OnInit } from '@angular/core';
import { news } from './news.data';
import { News } from '../../shared/type';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-module-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  newsList: Array<News> = news;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {}

  pushPage(id: number): void{
    this.navCtrl.navigateForward(`news-detail/${id}`);
  }

}
