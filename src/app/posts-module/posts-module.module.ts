import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsModuleRoutingModule } from './posts-module-routing.module';
import { ContainerComponent } from './container/container.component';
import { AssistantModule } from '../assistant/assistant.module';
import { LastPostsComponent } from './last-posts/last-posts.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetalComponent } from './post-detal/post-detal.component';

@NgModule({
  declarations: [ContainerComponent, LastPostsComponent, PostsComponent, PostDetalComponent],
  imports: [
    CommonModule,
    PostsModuleRoutingModule,
    AssistantModule
  ],
  exports: [LastPostsComponent]
})
export class PostsModuleModule { }
