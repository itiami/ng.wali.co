import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { ICategory } from 'src/app/_model/category.model';
import { CategoryService } from 'src/app/_services/category.service';
import { catJsonObj } from 'src/assets/data/categories';

interface Category {
  mainCat?: string;
  subCat?: string;
  childCat_1?: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  catObj: Category[] = catJsonObj;
  categories: ICategory[] = [];

  mainCategories: any[] = [];
  subCategories: any[] = [];
  childCategories: any[] = [];

  selectedMainCat: string = '';
  selectedSubCat: string = '';
  selectedChild_1Cat: string = '';

  output!: any;


  constructor(
    private categoryService: CategoryService,
  ) {
    //this.mainCategories = Array.from(new Set(this.catObj.map(item => item.mainCat)));
  }

  ngOnInit(): void {
    this.getCatagories();
  }

  getCatagories(): void {
    this.categoryService.getAllCategory().subscribe(data => {
      if (data) {
        this.categories = data.body;
        this.mainCategories = Array.from(new Set(this.categories.map(item => item.mainCat)));
      }
    })
  }


  onMainCatChange() {
    this.subCategories = Array.from(new Set(this.catObj.filter(item => item.mainCat === this.selectedMainCat).map(item => item.subCat)));
    this.childCategories = []; // reset child categories
    this.selectedSubCat = "";
    this.selectedChild_1Cat = "";
  }

  onSubCatChange() {
    this.childCategories = Array.from(new Set(this.catObj.filter(item => item.subCat === this.selectedSubCat).map(item => item.childCat_1)));
    this.selectedChild_1Cat = "";
  }


  getDt() {
    this.output = {
      mainCat: this.selectedMainCat,
      subCat: this.selectedSubCat,
      childCat_1: this.selectedChild_1Cat,
    };

    console.log(this.output);


  }

}