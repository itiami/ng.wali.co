import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {


  ccName?: String;
  counter: number = 0;



  onIncrement() {
    this.counter += 1;
  }
  onDecrement() {
    if (this.counter > 0) {
      this.counter -= 1;
    }
  }
  onReset() {
    this.counter = 0;
  }

}


