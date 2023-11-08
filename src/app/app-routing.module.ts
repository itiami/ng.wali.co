// app-routing.module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './_shared/shared.module';
import { NotFoundComponent } from './_shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) },
  { path: 'users', loadChildren: () => import('./modules/user-profile/user-profile.module').then(m => m.UserProfileModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'carrt', loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule) },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'order', loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule) },
  { path: 'checkout', loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
