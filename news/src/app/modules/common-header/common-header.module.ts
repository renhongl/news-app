import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHeaderComponent } from './common-header.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CommonHeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [CommonHeaderComponent]
})
export class CommonHeaderModule { }
