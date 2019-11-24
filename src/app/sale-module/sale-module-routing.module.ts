import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { SaleComponent } from './sale/sale.component';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';
import { MyProductsComponent } from './my-products/my-products.component';

const routes: Routes = [
  {path:'',component:ContainerComponent,children:[
    {path:'',component:SaleComponent},
    {path:'product-detail/:id',component:SaleDetailComponent},
    {path:'my-products',component:MyProductsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleModuleRoutingModule { }
