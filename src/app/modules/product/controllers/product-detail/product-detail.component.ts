// product-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/_services/product-list.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})


export class ProductDetailComponent implements OnInit {

  name: String = "";

  constructor(private productListService: ProductListService) { }







  ngOnInit(): void {
    console.log(this.name);
    ;
  }

}
