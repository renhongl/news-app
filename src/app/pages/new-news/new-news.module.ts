import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewNewsComponent } from './new-news.component';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { NewsService } from '../../services/news.service';

const routes: Routes = [
  {
    path: '',
    component: NewNewsComponent
  }
];

@NgModule({
  declarations: [NewNewsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    {
      provide: 'userService',
      useClass: UserService
    },
    {
      provide: 'newsService',
      useClass: NewsService
    }
  ]
})
export class NewNewsPageModule { }
