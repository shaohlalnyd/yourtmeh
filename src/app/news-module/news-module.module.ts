import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LastNewsComponent} from './last-news/last-news.component'
import { NewsModuleRoutingModule } from './news-module-routing.module';
import { ContainerComponent } from './container/container.component';
import { NewsComponent } from './news/news.component';
import { AssistantModule } from '../assistant/assistant.module';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsRowComponent } from './news-row/news-row.component';

@NgModule({
  declarations: [LastNewsComponent, ContainerComponent, NewsComponent, NewsDetailComponent, NewsRowComponent],
  imports: [
    CommonModule,
    NewsModuleRoutingModule,
    AssistantModule
  ],
  exports:[
    LastNewsComponent
  ]
})
export class NewsModuleModule { }
