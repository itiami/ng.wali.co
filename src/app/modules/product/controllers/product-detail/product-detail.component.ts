// product-detail.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})


export class ProductDetailComponent implements OnInit {

  //products$?: Observable<ProductList[]>;

  constructor() { };



  ngOnInit(): void {

  };


  loadProducts() { }


  addProduct() {
    //this.store.dispatch(ProductActions.deleteProduct())
  }


  delProduct(product: any) {
    console.log(product);
  }

}
