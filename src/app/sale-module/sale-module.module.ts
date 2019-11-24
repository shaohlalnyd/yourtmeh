import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleModuleRoutingModule } from './sale-module-routing.module';
import { ContainerComponent } from './container/container.component';
import { SaleComponent } from './sale/sale.component';
import { AssistantModule } from '../assistant/assistant.module';
import {NgxSmartModalModule, NgxSmartModalService} from 'ngx-smart-modal';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';
import { MyProductsComponent } from './my-products/my-products.component'
import { MatButtonModule,MatButton } from '@angular/material/button';

@NgModule({
  declarations: [ContainerComponent, SaleComponent, SaleDetailComponent, MyProductsComponent],
  imports: [
    CommonModule,
    SaleModuleRoutingModule,
    AssistantModule,
    NgxSmartModalModule.forRoot(),
  ],
})
export class SaleModuleModule { }
