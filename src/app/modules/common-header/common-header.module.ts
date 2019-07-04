import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHeaderComponent } from './common-header.component';
import { IonicModule } from '@ionic/angular';
import { SubMenuService } from '../../services/sub-menu.service';


@NgModule({
  declarations: [CommonHeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  providers: [
    {
      provide: 'subMenuService',
      useClass: SubMenuService
    }
  ],
  exports: [CommonHeaderComponent]
})
export class CommonHeaderModule { }
