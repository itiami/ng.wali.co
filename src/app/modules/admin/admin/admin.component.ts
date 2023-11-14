import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  containerName: string | null = "user";
  display: Boolean = false;

  formConfig = [
    { name: 'username', type: 'input', label: 'Username' },
    { name: 'email', type: 'input', label: 'Email' },
    { name: 'password', type: 'input', label: 'Password' },
  ];

  constructor(
    private elementRef: ElementRef,
    private _router: Router
  ) { }

  ngOnInit(): void { }





  ngAfterViewInit(): void {
    console.log(this.containerName);

  }

  displayItem(elem: HTMLElement) {
    this.display = true;
    if (this.containerName !== null ) {
      this.containerName = elem.getAttribute("name");
    }
  }



}
