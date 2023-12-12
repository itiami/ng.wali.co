import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  courses = [
    'english', 'math'
  ];
  heroes = false

  @ViewChild("inp_3")
  inp_3Elem!: ElementRef;

  onClick() {
    console.log(this.inp_3Elem.nativeElement.value);
  }


  onPressEnter(event: any) {
    console.log(event.target.value);
  }

  toAndFrom!: string;

  toAndFromEvent() {
    console.log(this.toAndFrom);
  }

}
