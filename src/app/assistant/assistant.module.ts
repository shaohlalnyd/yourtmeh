import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AssistanService } from './assistan.service';
import { PersonVerificationComponent } from './person-verification/person-verification.component';
import { SaleAdModalComponent } from './sale-ad-modal/sale-ad-modal.component';
import {FaNumPipe} from 'ngx-persian';
import {IRCurrencyPipe} from 'ngx-persian'
import {DropdownModule} from "ngx-dropdown";
import { CommentComponent } from './comment/comment.component';
import { CommentsComponent } from './comments/comments.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { DataService } from './data.service';
import { UserService } from './user.service';
import { MembersComponent } from './members/members.component';
import {NgxSmartModalModule, NgxSmartModalService,} from 'ngx-smart-modal';
import { NgxSmartModalStackService } from 'ngx-smart-modal/src/services/ngx-smart-modal-stack.service';
import {RouterModule} from '@angular/router'
import {NgImageSliderModule} from 'ng-image-slider';
import { NewSaleAdComponent } from './new-sale-ad/new-sale-ad.component';
import { ThumblineNewsComponent } from './thumbline-news/thumbline-news.component';
import { ThumblineAcademyComponent } from './thumbline-academy/thumbline-academy.component'
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {priceToChar} from './pipes/priceToChar.pipe'
@NgModule({
  declarations: [HeaderComponent, PersonVerificationComponent, SaleAdModalComponent,FaNumPipe,IRCurrencyPipe, CommentComponent, CommentsComponent, MembersComponent, NewSaleAdComponent, ThumblineNewsComponent, ThumblineAcademyComponent,priceToChar],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatButtonModule,
    NgxSmartModalModule.forRoot(),
    RouterModule,
    NgImageSliderModule,
    MatIconModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    PersonVerificationComponent,
    SaleAdModalComponent,
    CommentComponent,
    CommentsComponent,
    MatTooltipModule,
    MatButtonModule,
    MembersComponent,
    NgxSmartModalModule,
    NgImageSliderModule,
    NewSaleAdComponent,
    ThumblineNewsComponent,
    ThumblineAcademyComponent,
    MatIconModule,
    priceToChar
  ],
  providers:[
    AssistanService,
    DataService,
    UserService,
  ]
})
export class AssistantModule { }
