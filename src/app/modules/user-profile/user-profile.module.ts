// user-profile.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserComponent } from './components/user.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { AuthInterceptor } from 'src/app/_interceptor/auth.interceptor';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class UserProfileModule { }
