import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductListService } from 'src/app/_services/product-list.service';
import { AddProductComponent } from '../../product/add-product/add-product.component';
import { IProduct } from 'src/app/_model/product-list.model';


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
    private mat: MatDialog,
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


  update(...arg: any) {
    this.qt += 1;
    Object.assign(this.data, ...arg);
    Object.assign(this.data, { qt: this.qt })
    console.log(this.data)
  }
  openDialog() {
    const dialogRef = this.mat.open(AddProductComponent, {
      width: '80%',
    })
  }

}
