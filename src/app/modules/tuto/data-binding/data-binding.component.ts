import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit, AfterViewInit {
  isDarkMode: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
  isDark: boolean = false;
  fnameInputRes!: string;
  classElmOutput!: string;
  winWidth!: string;

  constructor() { };

  @ViewChild('fname')
  fname!: ElementRef<HTMLInputElement>

  @ViewChildren('classElm')
  classElm!: QueryList<ElementRef>;

  @HostListener('keyup.enter')
  onKeyEnter() {
    console.log(this.fname.nativeElement.value);
    // or to send thid fname back to html, 
    // create a variable i.g fnameInputRes & call in html inside {{}}
    this.fnameInputRes = this.fname.nativeElement.value;
  }


  /*  @HostListener('click')
   onMouseOver() {
     this.classElm.forEach((el: ElementRef<HTMLDivElement>) => {
       console.log(el.nativeElement.innerText);
     })
   } */

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.clsElemMouseOver();
    //this.getSize();
  }


  clsElemMouseOver() {
    this.classElm.forEach((el: ElementRef<HTMLDivElement>) => {
      el.nativeElement.addEventListener('mouseover', () => {
        el.nativeElement.style.borderBottom = '2px solid white';
        this.classElmOutput = el.nativeElement.innerText;
      })

      el.nativeElement.addEventListener('mouseleave', () => {
        el.nativeElement.style.borderBottom = '';
        this.classElmOutput = '';
      })
    })
  }


  @HostListener('mouseover')
  classElmOutputListener() {
    this.classElm.forEach(el => {
      //this.classElmOutput = el.nativeElement.innerText;
    })
  }


  /* @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.winWidth = event.target.innerWidth;
  } */


  /* getSize() {
    fromEvent(window, 'resize').subscribe(dt => {
      console.log(dt);
    })
  } */

};
