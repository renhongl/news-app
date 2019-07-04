import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubMenuComponent } from './sub-menu.component';
import { IonicModule } from '@ionic/angular';
import { NewsModule } from '../news/news.module';
import { SubMenuService } from '../../services/sub-menu.service';


@NgModule({
  declarations: [SubMenuComponent],
  imports: [
    IonicModule,
    CommonModule,
    NewsModule
  ],
  providers: [
    {
      provide: 'subMenuService',
      useClass: SubMenuService
    }
  ],
  exports: [SubMenuComponent],
})
export class SubMenuModule { }
