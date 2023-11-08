import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user.component';
import { authGuard } from "../../_guards/auth.guard";

const routes: Routes = [
  { path: "", component: UserComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
