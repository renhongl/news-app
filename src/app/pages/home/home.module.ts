import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { CommonHeaderModule } from '../../modules/common-header/common-header.module';
import { SubMenuModule } from '../../modules/sub-menu/sub-menu.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CommonHeaderModule,
    SubMenuModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
