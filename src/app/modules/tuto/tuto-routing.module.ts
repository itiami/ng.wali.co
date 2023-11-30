import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './input-output/counter/counter.component';
import { NgrxCounterComponent } from './ngrx-counter/ngrx-counter/ngrx-counter.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { AddPostComponent } from './post/add-post/add-post.component';

const routes: Routes = [
  { path: "ngrx/counter", component: CounterComponent },
  { path: "ngrx/ngrx_counter", component: NgrxCounterComponent },
  {
    path: "ngrx/post",
    component: PostListComponent,
    children: [
      { path: "add", component: AddPostComponent },
      { path: "edit/:id", component: EditPostComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutoRoutingModule { }
