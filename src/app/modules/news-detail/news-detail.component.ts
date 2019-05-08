import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { newsList } from './news-detail.data';
import { News } from 'src/app/shared/type';
import { translateDate } from '../../shared/utils';

@Component({
  selector: 'app-module-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent implements OnInit {

  currentNews: News;

  constructor(private route: ActivatedRoute, @Inject('newsService') private newsService) { }

  ngOnInit() {
    this.getCurrentNews();
  }

  getCurrentNews() {
      const id = this.route.snapshot.paramMap.params.id;
      this.newsService.getNewsContent(id).subscribe(result => {
        const item = result.data;
        this.currentNews = {
          id: item.aid,
          title: item.title,
          content: item.content,
          author: item.writer || item.source,
          read: item.click_count,
          postDate: translateDate(item.pub_time),
          previewImg: item.headpic,
        }
      });
  }

}
