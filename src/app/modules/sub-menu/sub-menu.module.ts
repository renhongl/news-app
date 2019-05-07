import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubMenuComponent } from './sub-menu.component';
import { IonicModule } from '@ionic/angular';
import { NewsModule } from '../news/news.module';

@NgModule({
  declarations: [SubMenuComponent],
  imports: [
    IonicModule,
    CommonModule,
    NewsModule
  ],
  exports: [SubMenuComponent],
})
export class SubMenuModule { }
