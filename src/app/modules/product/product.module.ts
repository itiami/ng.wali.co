// product.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './controllers/product-list/product-list.component';
import { ProductDetailComponent } from './controllers/product-detail/product-detail.component';
import { SearchBarComponent } from './controllers/search-bar/search-bar.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    SearchBarComponent,

  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    FormsModule

  ]
})
export class ProductModule { }
