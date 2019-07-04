import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from '../../services/news.service';
import { SubMenuService } from '../../services/sub-menu.service';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    IonicModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    {
      provide: 'newsService',
      useClass: NewsService
    },
    {
      provide: 'subMenuService',
      useClass: SubMenuService
    }
  ],
  exports: [NewsComponent]
})
export class NewsModule { }
