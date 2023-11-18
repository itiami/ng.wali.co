import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ICounter } from 'src/app/ngrx-store/counter.state';

@Component({
  selector: 'app-ngrx-counter-output',
  templateUrl: './ngrx-counter-output.component.html',
  styleUrls: ['./ngrx-counter-output.component.css']
})
export class NgrxCounterOutputComponent implements OnInit {

counterObservable$?: Observable<any>;

constructor(
  private store: Store<{ counter: { counter: ICounter } }>
) { };


ngOnInit(): void {
  this.counterObservable$ = this.store.select("counter");
}


}
