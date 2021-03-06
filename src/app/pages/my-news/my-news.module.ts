import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyNewsComponent } from './my-news.component';
import { NewsService } from 'src/app/services/news.service';
import { UserService } from 'src/app/services/user.service';

@NgModule({
  declarations: [MyNewsComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MyNewsComponent }])
  ],
  providers: [
    {
      provide: 'newsService',
      useClass: NewsService
    },
    {
      provide: 'userService',
      useClass: UserService
    }
  ]
})
export class MyNewsPageModule { }
