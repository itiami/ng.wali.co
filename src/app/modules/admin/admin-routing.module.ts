// admin-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from 'src/app/_guards/auth.guard';



const routes: Routes = [
  { path: "", component: AdminComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
