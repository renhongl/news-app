import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { IonicModule } from '@ionic/angular';
import { NewsService } from '../../services/news.service';
import { SubMenuService } from '../../services/sub-menu.service';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    IonicModule,
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
