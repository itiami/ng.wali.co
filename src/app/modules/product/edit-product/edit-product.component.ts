import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/_model/product-list.model';
import { updateProduct } from '../../admin/product/product.action';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  inp_title!: string;
  inp_price!: number;
  inp_detail!: string;

  constructor(
    private matDialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public productData: IProduct
  ) { };


  ngOnInit(): void {
    this.inp_title = this.productData.title!;
    this.inp_price = this.productData.price!;
    this.inp_detail = this.productData.detail!;
  }

  onSave() {
    const product: IProduct = {
      id: this.productData.id,
      title: this.inp_title,
      price: this.inp_price,
      detail: this.inp_detail
    }
    this.matDialogRef.close({ product: product });
  }

  onClose() {
    this.matDialogRef.close()
  }

}
