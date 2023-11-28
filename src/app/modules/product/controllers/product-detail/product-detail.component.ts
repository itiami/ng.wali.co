// product-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/_services/product-list.service';
import { Store } from "@ngrx/store";
import * as ProductActions from "../../product.action";
import { Observable } from 'rxjs';
import { ProductState } from '../../product.state';
import { ProductList } from 'src/app/_model/product-list.model';
import { ICounterState } from 'src/app/modules/tuto/ngrx-counter/counter.state';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})


export class ProductDetailComponent implements OnInit {

  //products$?: Observable<ProductList[]>;

  constructor(private store: Store<{ counter: ICounterState }>) { };



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
