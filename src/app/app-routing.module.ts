import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './core/tabs/tabs.module#TabsPageModule' },
  { path: 'news-detail/:id', loadChildren: './pages/news-detail/news-detail.module#NewsDetailPageModule' },
  { path: 'new-news/:username', loadChildren: './pages/new-news/new-news.module#NewNewsPageModule' },
  { path: 'my-news/:username', loadChildren: './pages/my-news/my-news.module#MyNewsPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
