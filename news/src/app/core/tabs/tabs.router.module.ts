import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../../pages/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'xigua-video',
        children: [
          {
            path: '',
            loadChildren: '../../pages/xigua-video/xigua-video.module#XiguaVideoPageModule'
          }
        ]
      },
      {
        path: 'video',
        children: [
          {
            path: '',
            loadChildren: '../../pages/video/video.module#VideoPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
