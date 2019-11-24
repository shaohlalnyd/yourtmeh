import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PostsModuleModule } from './posts-module/posts-module.module';
import { AdminModuleModule } from './admin-module/admin-module.module';

const routes: Routes = [
  { path: "", component: MainPageComponent },
  {
    path: 'news',
    loadChildren: () => import('./news-module/news-module.module').then(m => m.NewsModuleModule)
  },{
    path:'sale',
    loadChildren:()=>import('./sale-module/sale-module.module').then(m=>m.SaleModuleModule)
  },{
    path:'post',
    loadChildren:()=>import('./posts-module/posts-module.module').then(m=>PostsModuleModule)
  },
  {
    path:"admin",
    loadChildren:()=>import('./admin-module/admin-module.module').then(m=>AdminModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
