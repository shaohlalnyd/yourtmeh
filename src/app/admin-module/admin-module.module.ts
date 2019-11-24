import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { ContainerComponent } from './container/container.component';
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatButtonModule} from '@angular/material/button';
import {AssistantModule} from '../assistant/assistant.module';
import { ProductsComponent } from './products/products.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminAdComponent } from './admin-ad/admin-ad.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component' 
@NgModule({
  declarations: [ContainerComponent, ProductsComponent, AdminUsersComponent, AdminMenuComponent, AdminAdComponent, AdminNewsComponent, AdminPostsComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    AssistantModule
  ]
})
export class AdminModuleModule { }
