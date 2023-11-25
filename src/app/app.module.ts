// app.module.ts

import { NgModule, isDevMode } from '@angular/core';
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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './modules/tuto/ngrx-counter/counter.reducer';
import { postReducer } from './modules/tuto/post/post.reducer';
import { AppState } from './ngrx-app-store/app.state';





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
    StoreModule.forRoot(AppState),
    EffectsModule.forRoot([]),
    TutoModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectOutsideZone: true // If set to true, the connection is established outside the Angular zone for better performance
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
