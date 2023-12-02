import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './input-output/counter/counter.component';
import { PopupComponent } from './popup/popup.component';


const routes: Routes = [
  { path: "ngrx/counter", component: CounterComponent },
  { path: "materialLibrary", component: PopupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutoRoutingModule { }
