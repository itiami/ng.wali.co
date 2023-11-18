import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/_services/product-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data = new Object();
  productList: any = [];
  qt: number = 0;


  constructor(
    private productService: ProductListService,
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }


  getProductList(): void {
    this.productService.getAllProducts().subscribe(data => {
      if (data) {
        this.productList = data;
        console.log(data)
      }
    })
  }


  productDetail() {
  }

  addToCart(...arg: any) {
    this.qt += 1;
    Object.assign(this.data, ...arg);
    Object.assign(this.data, { qt: this.qt })
    console.log(this.data)
  }


}
