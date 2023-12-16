import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './input-output/counter/counter.component';
import { PopupComponent } from './popup/popup.component';
import { NformsComponent } from './nforms/nforms.component';
import { NgLifeCycleHooks } from './ng-lifecycle-hooks/ng-life';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NestedJsonComponent } from './nested-json/nested-json.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';


const routes: Routes = [
  { path: "ngrx/counter", component: CounterComponent },
  { path: "materialLibrary", component: PopupComponent },
  { path: "forms", component: NformsComponent },
  { path: "ngLifeCycleHooks", component: NgLifeCycleHooks },
  { path: "dataBinding", component: DataBindingComponent },
  { path: "selectOption", component: NestedJsonComponent },
  { path: "customPipe", component: CustomPipeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutoRoutingModule { }
