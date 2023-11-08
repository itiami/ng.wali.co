import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfigmationComponent } from './configmation/configmation.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    PaymentComponent,
    ConfigmationComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
