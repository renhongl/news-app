import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHeaderComponent } from './common-header.component';
import { IonicModule } from '@ionic/angular';
import { SubMenuService } from '../../services/sub-menu.service';
import { UserService } from '../../services/user.service';


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
    },
    {
      provide: 'userService',
      useClass: UserService
    }
  ],
  exports: [CommonHeaderComponent]
})
export class CommonHeaderModule { }
