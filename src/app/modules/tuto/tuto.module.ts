import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutoRoutingModule } from './tuto-routing.module';
import { CounterButtonsComponent } from './input-output/counter-buttons/counter-buttons.component';
import { CounterComponent } from './input-output/counter/counter.component';
import { CounterOutputComponent } from './input-output/counter-output/counter-output.component';
import { NgrxCounterButtonComponent } from './ngrx-counter/ngrx-counter-button/ngrx-counter-button.component';
import { NgrxCounterComponent } from './ngrx-counter/ngrx-counter/ngrx-counter.component';
import { NgrxCounterOutputComponent } from './ngrx-counter/ngrx-counter-output/ngrx-counter-output.component';
import { FormsModule } from '@angular/forms';
import { NgrxCustomCounterComponent } from './ngrx-counter/ngrx-custom-counter/ngrx-custom-counter.component';
import { PostComponent } from './post/post.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [
    CounterButtonsComponent,
    CounterComponent,
    CounterOutputComponent,
    NgrxCounterButtonComponent,
    NgrxCounterComponent,
    NgrxCounterOutputComponent,
    NgrxCustomCounterComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    TutoRoutingModule,
    FormsModule,
    SharedModule,
    MatIconModule
  ],
  exports: [
    CounterButtonsComponent,
    CounterComponent,
    CounterOutputComponent,
    NgrxCounterButtonComponent,
    NgrxCounterComponent,
    NgrxCounterOutputComponent,
    PostComponent,
  ]
})
export class TutoModule { }
