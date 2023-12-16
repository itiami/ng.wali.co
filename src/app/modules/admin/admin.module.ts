import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { EffectsModule } from '@ngrx/effects';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductEffects } from './product/product.effects';




@NgModule({
  declarations: [
    AdminComponent,
    CategoryComponent,
    ProductComponent,
    UserComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    EffectsModule.forFeature([ProductEffects]),
  ],

})
export class AdminModule { }
