import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailComponent } from './news-detail.component';
import { NgxMdModule } from 'ngx-md';
import { NewsService } from '../../services/news.service';
import { UserService } from '../../services/user.service';


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
    },
    {
      provide: 'userService',
      useClass: UserService
    }
  ],
  exports: [NewsDetailComponent]
})
export class NewsDetailModule { }
