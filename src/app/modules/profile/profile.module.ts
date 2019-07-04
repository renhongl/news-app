import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { UserService } from '../../services/user.service';

@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  providers: [
    {
      provide: 'userService',
      useClass: UserService
    }
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }
