import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailComponent } from './news-detail.component';
import { NgxMdModule } from 'ngx-md';


@NgModule({
  declarations: [NewsDetailComponent],
  imports: [
    CommonModule,
    NgxMdModule.forRoot()
  ],
  exports: [NewsDetailComponent]
})
export class NewsDetailModule { }
