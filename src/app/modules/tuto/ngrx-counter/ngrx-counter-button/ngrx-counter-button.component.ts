import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as CounterActions from 'src/app/ngrx-store/counter.action';
import { ICounter } from 'src/app/ngrx-store/counter.state';

@Component({
  selector: 'app-ngrx-counter-button',
  templateUrl: './ngrx-counter-button.component.html',
  styleUrls: ['./ngrx-counter-button.component.css']
})
export class NgrxCounterButtonComponent {


  constructor(private store: Store<ICounter>) { };

  onIncrement() {
    console.log("Increment");
    this.store.dispatch(CounterActions.incCounter());
  }
  onDecrement() {
    this.store.dispatch(CounterActions.decCounter());
  }
  onReset() {
    this.store.dispatch(CounterActions.resetCounter());
  }


}


