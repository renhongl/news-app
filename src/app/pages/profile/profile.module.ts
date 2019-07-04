import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { ProfileModule } from '../../modules/profile/profile.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProfileModule,
    RouterModule.forChild([{ path: '', component: ProfileComponent }])
  ]
})
export class ProfilePageModule { }
