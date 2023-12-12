import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ICategory } from 'src/app/_model/category.model';
import { IProduct } from 'src/app/_model/product-list.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  SelectCategory = "SelectCategory";
  formGroup!: FormGroup;

  catList = [
    { title: "mainCat", value: "Food" },
    { title: "subCat", value: "Health Care" },
    { title: "childCat", value: "Others" }
  ]

  get title() { return this.formGroup.get('title') }
  get price() { return this.formGroup.get('price') }
  get imageUrl() { return this.formGroup.get('imageUrl') }
  get setCategory() { return this.formGroup.get('setCategory') }

  constructor(
    private store: Store,
    private dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA)
    private data: IProduct
  ) { };
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [Validators.required]),
      setCategory: new FormControl('Health Care', [Validators.required]), // select a default value..
    })
  }


  dialogOK() {
    if (this.formGroup.valid) {
      this.dialogRef.close();
      console.log(this.formGroup.value);

    }
  }

  dialogCancel() {
    this.dialogRef.close()
  }

}
