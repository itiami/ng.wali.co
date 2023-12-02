import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CounterActions from '../counter.action';
import { selectCounterMsg } from '../counter.selectors';
import { ICounterState, counterInitialState } from '../counter.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-ngrx-custom-counter',
  templateUrl: './ngrx-custom-counter.component.html',
  styleUrls: ['./ngrx-custom-counter.component.css']
})
export class NgrxCustomCounterComponent implements OnInit, OnDestroy {
  customCounterBtnInp?: number;
  inpCounterMsg?: any;
  msgOutput?: string;
  counterSubscription!: Subscription;
  msgObservable$!: Observable<any>;
  constructor(private store: Store<{ counter: ICounterState }>) { };

  ngOnInit(): void {
    this.counterSubscription = this.store.select(selectCounterMsg).subscribe((data) => {
      this.msgOutput = data;
      console.log("Counter Coustom Input is called");
    })

    this.msgObservable$ = this.store.select(selectCounterMsg);
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
    console.log("ngOnDestroy");

  }

  addCustomNumber() {
    if (this.customCounterBtnInp !== undefined && this.customCounterBtnInp !== null) {
      this.store.dispatch(
        CounterActions.customIncCounter({
          value: +this.customCounterBtnInp // convert Str to Num using + symbole..
        })
      )
    }
  }

  addCustomTxt() {
    if (this.inpCounterMsg !== undefined) {
      this.store.dispatch(CounterActions.customCounterTxt({
        value: this.inpCounterMsg
      }))
    }
  }

}
