import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './input-output/counter/counter.component';
import { PostComponent } from './post/post.component';
import { NgrxCounterComponent } from './ngrx-counter/ngrx-counter/ngrx-counter.component';

const routes: Routes = [
  { path: "ngrx/counter", component: CounterComponent },
  { path: "ngrx/ngrx_counter", component: NgrxCounterComponent },
  { path: "ngrx/post", component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutoRoutingModule { }
