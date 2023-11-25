import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectCounterNum } from '../counter.selectors';
import { ICounterState } from '../counter.state';
import { AppState } from 'src/app/ngrx-app-store/app.state';

@Component({
  selector: 'app-ngrx-counter-output',
  templateUrl: './ngrx-counter-output.component.html',
  styleUrls: ['./ngrx-counter-output.component.css']
})
export class NgrxCounterOutputComponent implements OnInit, OnDestroy {

  //counterObservable$?: Observable<any>;

  counter?: number;
  counterSubscription?: Subscription;

  constructor(private store: Store<{ counter: ICounterState }>) { };


  ngOnInit(): void {
    this.counterSubscription = this.store.select(selectCounterNum).subscribe((data) => {
      this.counter = data;
      console.log("Counter Output is called");
    });
  }


  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }


}
