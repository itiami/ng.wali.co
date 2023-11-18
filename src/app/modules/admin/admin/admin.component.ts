import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewContainerRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { CategoryComponent } from '../category/category.component';
import { ProductComponent } from '../product/product.component';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //currentComponent: string = 'ProductComponent';
  currentComponent: string = 'UserComponent';
  display: Boolean = false;

  formConfig = [
    { name: 'username', type: 'input', label: 'Username' },
    { name: 'email', type: 'input', label: 'Email' },
    { name: 'password', type: 'input', label: 'Password' },
  ];


  constructor(
    private elementRef: ElementRef,
    private _router: Router,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void { }


  ngAfterViewInit(): void { }

  displayItem(elem: HTMLElement) {
    this.display = true;
  }


  loadComponent(componentName: string) {
    let viewContainerRef;
    switch (componentName) {
      case 'ProductComponent':
        viewContainerRef = this.viewContainerRef.createComponent(ProductComponent);
        break;

      case 'UserComponent':
        viewContainerRef = this.viewContainerRef.createComponent(UserComponent);
        break;

      case 'CategoryComponent':
        viewContainerRef = this.viewContainerRef.createComponent(CategoryComponent);
        break;

      default:
        return ProductComponent;
    }
    viewContainerRef.destroy();
    return viewContainerRef;
  }


  onChangeComponent(componentName: string) {
    this.currentComponent = componentName;
    this.loadComponent(componentName);
    console.log(componentName);

  }

  @HostListener("") ref() {

  }

}
