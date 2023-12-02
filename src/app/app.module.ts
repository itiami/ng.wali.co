// app.module.ts

import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { EffectsModule } from '@ngrx/effects';
import { AboutComponent } from './modules/about/about.component';
import { TutoModule } from './modules/tuto/tuto.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PostModule } from './modules/post/post.module';
import { CounterModule } from './modules/counter/counter.module';




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
    /* StoreModule.forRoot({
      counter: counterReducer,
      posts: postReducer
    }), */
    //StoreModule.forRoot(AppReducer), 
    /*  this method all state i.g user, product, category etc will load while application start.
    if so the main.js file gets bigger on load. which might case and issue of slow loading.
    so it's preferable to load the state on click of the relevant state 
    */
    StoreModule.forRoot({}),
    //EffectsModule.forRoot([PostEffects]),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({}),
    TutoModule,
    PostModule,
    CounterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
