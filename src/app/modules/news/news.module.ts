import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [NewsComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [NewsComponent]
})
export class NewsModule { }
