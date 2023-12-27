// admin-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from 'src/app/_guards/auth.guard';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
  //{ path: "", component: AdminComponent, canActivate: [authGuard] },
  { path: "", component: AdminComponent },
  { path: "cat", component: CategoryComponent },
  { path: "prod", component: ProductComponent },
  { path: "users", component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
