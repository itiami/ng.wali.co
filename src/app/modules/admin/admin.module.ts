import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AdminComponent,
    CategoryComponent,
    ProductComponent,
    UserComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],

})
export class AdminModule { }
