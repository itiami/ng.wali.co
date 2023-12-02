import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { NgrxCounterComponent } from "./ngrx-counter/ngrx-counter.component";
import { NgrxCounterButtonComponent } from "./ngrx-counter-button/ngrx-counter-button.component";
import { NgrxCounterOutputComponent } from "./ngrx-counter-output/ngrx-counter-output.component";
import { NgrxCustomCounterComponent } from "./ngrx-custom-counter/ngrx-custom-counter.component";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer } from './counter.reducer';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    NgrxCounterComponent,
    NgrxCounterButtonComponent,
    NgrxCounterOutputComponent,
    NgrxCustomCounterComponent,
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    SharedModule,
    StoreModule.forFeature("counter", counterReducer),
    EffectsModule.forFeature([]),
    StoreDevtoolsModule.instrument({
      //maxAge: 25, // Retains last 25 states
      // logOnly: !isDevMode(), // Restrict extension to log-only mode
      // autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      // trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      // traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      // connectOutsideZone: true // If set to true, the connection is established outside the Angular zone for better performance
    }),
    FormsModule,
  ]
})
export class CounterModule { }
