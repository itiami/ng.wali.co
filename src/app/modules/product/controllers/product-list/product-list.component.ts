import { Component, OnInit } from '@angular/core';
import { ProductListService } from "../../../../_services/product-list.service";



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: String = "Product List";

  prodAttr: String = "productTitle";
  itemImageUrl: String = 'assets/img/cart.svg';

  productList: any = [];

  constructor(
    private productService: ProductListService,
  ) { }


  getProductList(): void {
    this.productService.getProducts().subscribe(data => {
      if (data) {
        this.productList = data;
        console.log(data)
      }
    })
  }

  addToCart(...arg: any) {
    console.log(...arg)
  }


  ngOnInit(): void {
    this.getProductList();
  }

}

