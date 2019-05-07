import { Component, OnInit } from '@angular/core';
import { news } from './news.data';

@Component({
  selector: 'app-module-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  newsList = news;

  constructor() { }

  ngOnInit() {}

}
