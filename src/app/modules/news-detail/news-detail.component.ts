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
    this.getCurrentNews();
  }

  getCurrentNews() {
      const newsId = this.route.snapshot.paramMap.get('id');
      this.newsService.getNewsList(newsId.split('-')[1]).subscribe( result => {
        const item = result.showapi_res_body.pagebean.contentlist.filter((item, index) => item.id === newsId.split('-')[0])[0];
        this.currentNews = {
          id: item.id,
          channelId: item.channelId,
          title: item.title,
          author: item.source,
          read: item.click_count,
          postDate: translateDate(item.pubDate),
          previewImg: item.img,
          content: parseHtml(item.html)
        }
      });
  }
}
