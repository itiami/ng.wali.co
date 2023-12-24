import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit, AfterViewInit {
  isDarkMode: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
  isDark: boolean = false;
  fnameInputRes!: string;

  constructor() { };

  @ViewChild('fname')
  fname!: ElementRef<HTMLInputElement>

  @HostListener('keyup.enter')
  onKeyEnter() {
    console.log(this.fname.nativeElement.value);
    // or to send thid fname back to html, 
    // create a variable i.g fnameInputRes & call in html inside {{}}
    this.fnameInputRes = this.fname.nativeElement.value;
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void { }


};
