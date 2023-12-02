import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './input-output/counter/counter.component';
import { PopupComponent } from './popup/popup.component';
import { NformsComponent } from './nforms/nforms.component';
import { TestComponent } from './ng-lifecycle-hooks/ng-life';


const routes: Routes = [
  { path: "ngrx/counter", component: CounterComponent },
  { path: "materialLibrary", component: PopupComponent },
  { path: "forms", component: NformsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutoRoutingModule { }
