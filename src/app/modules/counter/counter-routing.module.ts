import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxCounterComponent } from './ngrx-counter/ngrx-counter.component';

const routes: Routes = [
  { path: "", component: NgrxCounterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRoutingModule { }
