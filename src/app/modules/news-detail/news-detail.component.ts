import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/shared/type';
import { translateDate, parseHtml } from '../../shared/utils';

@Component({
  selector: 'app-module-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent implements OnInit {

  currentNews: News;

  constructor(private route: ActivatedRoute, @Inject('newsService') private newsService) { }

  ngOnInit() {
    this.getNewsDetail();
  }

  getNewsDetail() {
    const newsId = this.route.snapshot.paramMap.get('id');
    this.newsService.getNewsDetail(newsId).subscribe(result => {
      const news = result.data;
      this.currentNews = {
        id: news._id,
        title: news.title,
        author: news.author,
        postDate: translateDate(news.dateTime),
        content: news.content
      };
    });
  }
}
