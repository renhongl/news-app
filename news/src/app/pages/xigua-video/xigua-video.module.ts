import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XiguaVideoPage } from './xigua-video.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: XiguaVideoPage }])
  ],
  declarations: [XiguaVideoPage]
})
export class XiguaVideoPageModule {}
