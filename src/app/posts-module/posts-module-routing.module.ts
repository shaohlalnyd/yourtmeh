import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetalComponent } from './post-detal/post-detal.component';

const routes: Routes = [
  {path:'',component:ContainerComponent,children:[
    {path:'',component:PostsComponent},
    {path:'post-detail/:id',component:PostDetalComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsModuleRoutingModule { }
