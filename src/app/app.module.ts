// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AboutComponent } from './modules/about/about.component';
import { TutoModule } from './modules/tuto/tuto.module';
import { counterReducer } from './ngrx-store/counter.reducer';





@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminModule,
    UserProfileModule,
    ProductModule,
    CheckoutModule,
    OrderModule,
    AuthModule,
    CartModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(
      {
        counter: counterReducer,
        // product: productReducer, // if there is any we needs to add like this..
      },
      {}
    ),
    EffectsModule.forRoot([]),
    TutoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
