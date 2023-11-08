// product-detail.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  // external template and style
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],

  // inline template and style
  /* template: `
  <div class="wrapper">
    <app-header></app-header>
    <div class="content">
      <h4>{{pageTitle}}</h4>
      <h4>Inline @Component Directive</h4>
    </div>
  </div>
  `,
  styles: [
    `h1 { font-weight: bold; }`
  ], */


})


export class ProductDetailComponent implements OnInit {

  //pageTitle: String = "Product Detail Page....!!!";

  name: String = "";
  /* namePlaceHolder: String = "username";

  clearName(): void {
    this.name = "";
  } */

  ngOnInit(): void {
    console.log(this.name);
    ;
  }

}
