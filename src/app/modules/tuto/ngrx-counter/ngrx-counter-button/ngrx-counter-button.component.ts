import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decCounter, incCounter, resetCounter } from 'src/app/ngrx-store/counter.action';
import { ICounter } from 'src/app/ngrx-store/counter.state';

@Component({
  selector: 'app-ngrx-counter-button',
  templateUrl: './ngrx-counter-button.component.html',
  styleUrls: ['./ngrx-counter-button.component.css']
})
export class NgrxCounterButtonComponent {

  constructor(private store: Store<ICounter>) { };

  onIncrement() {
    this.store.dispatch(incCounter());
  }
  onDecrement() {
    this.store.dispatch(decCounter());
  }
  onReset() {
    this.store.dispatch(resetCounter());
  }

}
