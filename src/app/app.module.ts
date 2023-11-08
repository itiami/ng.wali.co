// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminModule } from './modules/admin/admin.module';
import { UserProfileModule } from './modules/user-profile/user-profile.module';
import { ProductModule } from './modules/product/product.module';
import { CheckoutModule } from './modules/checkout/checkout.module';
import { OrderModule } from './modules/order/order.module';
import { AuthModule } from './modules/auth/auth.module';
import { CartModule } from './modules/cart/cart.module';
import { SharedModule } from './_shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    UserProfileModule,
    ProductModule,
    CheckoutModule,
    OrderModule,
    AuthModule,
    CartModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
