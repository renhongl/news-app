import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileUpdateComponent } from './profile-update.component';
import { UserService } from 'src/app/services/user.service';

@NgModule({
  declarations: [ProfileUpdateComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ProfileUpdateComponent }])
  ],
  providers: [
    {
      provide: 'userService',
      useClass: UserService
    }
  ]
})
export class ProfileUpdatePageModule { }
