import { Component } from '@angular/core';
import { ProductListService } from 'src/app/_services/product-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private product:ProductListService){}

  createProduct(){
    
  }

}
