import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CounterActions from 'src/app/ngrx-store/counter.action';
import { ICounter } from 'src/app/ngrx-store/counter.state';

@Component({
  selector: 'app-ngrx-custom-counter',
  templateUrl: './ngrx-custom-counter.component.html',
  styleUrls: ['./ngrx-custom-counter.component.css']
})
export class NgrxCustomCounterComponent {

  constructor(private store: Store<ICounter>) { };

  counterBtnInp?: number;

  addCustomValue() {
    console.log("Custom Increment");
    if (this.counterBtnInp !== undefined && this.counterBtnInp !== null) {
      this.store.dispatch(
        CounterActions.customIncCounter({
          value: +this.counterBtnInp // convert Str to Num using + symbole..
        })
      )
    }
  }

}
