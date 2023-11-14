import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/_services/product-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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

  ngOnInit(): void {
    this.getProductList();
  }

}
