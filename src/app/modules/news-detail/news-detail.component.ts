import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { newsList } from './news-detail.data';
import { News } from 'src/app/shared/type';

@Component({
  selector: 'app-module-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent implements OnInit {

  currentNews: News;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.currentNews = newsList.filter(item => item.id === id)[0];
  }

}
