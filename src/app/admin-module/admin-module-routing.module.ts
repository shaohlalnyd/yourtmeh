import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { ProductsComponent } from './products/products.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminAdComponent } from './admin-ad/admin-ad.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  {
    path:"", component:ContainerComponent,children:[
      {path:"",redirectTo:'dashboard'},
      {path:"dashboard",component:AdminDashboardComponent},
      {path:"products",component:ProductsComponent},
      {path:"users",component:AdminUsersComponent},
      {path:"menu",component:AdminMenuComponent},
      {path:"advertising",component:AdminAdComponent},
      {path:"news",component:AdminNewsComponent},
      {path:"posts",component:AdminPostsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
