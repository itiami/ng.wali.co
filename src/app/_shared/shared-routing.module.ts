// shared-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { googleAuthGuard } from '../_guards/google-auth.guard';


const routes: Routes = [
  { path: "contact", component: ContactComponent, canActivate: [googleAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
