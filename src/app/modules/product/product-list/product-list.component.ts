import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductListService } from "../../../_services/product-list.service";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { IProduct } from 'src/app/_model/product-list.model';
import { Store } from '@ngrx/store';
import { deleteProduct, updateProduct } from '../../admin/product/product.action';



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

  dialogRef!: MatDialogRef<any>;

  constructor(
    private dialog: MatDialog,
    private productService: ProductListService,
    private store: Store
  ) { }


  getProductList(): void {
    this.productService.getAllProducts().subscribe(data => {
      if (data.status === 200) {
        this.productList = data.body;
        console.log(
          {
            "Status: ": data.status,
            "Status Text ": data.statusText,
            "URL": data.url
          }
        );
      } else {
        console.log("Error getting Data: ", data.status);
      }



    })
  }

  addToCart(...arg: any) {
    console.log(...arg)
  }


  ngOnInit(): void {
    this.getProductList();
  }


  openDialog(updateData: IProduct): void {
    const dialogRef = this.dialog.open(EditProductComponent, {
      data: updateData
    })


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("dialogRef.afterClosed() if: ", result);
        this.store.dispatch(updateProduct({ updatedProduct: result }))

      } else {
        console.log("dialogRef.afterClosed(): else..");

      }
    })
  }


  delete(id: any) {
    this.store.dispatch(deleteProduct({ productId: id }))
    console.log("Product Deleted: ", id);
    this.dialogRef.close();
  }

  diaglogDelete(templateRef: TemplateRef<any>): void {
    this.dialogRef = this.dialog.open(templateRef);
  }



}

