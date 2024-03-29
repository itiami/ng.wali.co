import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './input-output/counter/counter.component';
import { PopupComponent } from './popup/popup.component';
import { NformsComponent } from './nforms/nforms.component';
import { NgLifeCycleHooks } from './ng-lifecycle-hooks/ng-life';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NestedJsonComponent } from './nested-json/nested-json.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { CssComponent } from './css/css.component';
import { AngularMatLibraryComponent } from './angular-mat-library/angular-mat-library.component';


const routes: Routes = [
  { path: "materialLibrary", component: AngularMatLibraryComponent },
  { path: "ngrx/counter", component: CounterComponent },
  { path: "materialPopup", component: PopupComponent },
  { path: "forms", component: NformsComponent },
  { path: "ngLifeCycleHooks", component: NgLifeCycleHooks },
  { path: "dataBinding", component: DataBindingComponent },
  { path: "selectOption", component: NestedJsonComponent },
  { path: "customPipe", component: CustomPipeComponent },
  { path: "css", component: CssComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutoRoutingModule { }
