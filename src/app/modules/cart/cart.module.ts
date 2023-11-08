import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { ComponentComponent } from './component/component.component';


@NgModule({
  declarations: [
    ComponentComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
