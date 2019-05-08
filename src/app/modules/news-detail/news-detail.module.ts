import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailComponent } from './news-detail.component';
import { NgxMdModule } from 'ngx-md';
import { NewsService } from '../news/news.service';


@NgModule({
  declarations: [NewsDetailComponent],
  imports: [
    CommonModule,
    NgxMdModule.forRoot()
  ],
  providers: [
    {
      provide: 'newsService',
      useClass: NewsService
    }
  ],
  exports: [NewsDetailComponent]
})
export class NewsDetailModule { }
