import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ICategory } from 'src/app/_model/category.model';
import { CategoryService } from 'src/app/_services/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  form!:FormGroup;
  
  mainCatBind!: string;
  subCatBind!: string;
  childCatBind_1!: string;
  childCatBind_2!: string;
  categories!: ICategory[];
  mainCategories: Set<any> = new Set();
  subCategories: Set<any> = new Set();
  childCategories_1 = new Set();
  childCategories_2 = new Set();
  menuStructure: any = {};

  constructor(
    private categoryService: CategoryService,
    private renderer: Renderer2
  ) { }


  ngOnInit(): void {
    this.getCatagories();

  }

  getCatagories(): void {
    this.categoryService.getAllCategory().subscribe(data => {
      if (data) {
        this.categories = data.body;
        this.categories.forEach((item: ICategory) => {
          this.mainCategories.add(item.mainCat);
          // this.subCategories.add(item.subCat);
          // this.childCategories_1.add(item.childCat_1);
          // this.childCategories_2.add(item.childCat_2);
        })
      }
    })
  }

  onSelectionChange(option: any) {
    console.log(option.balu);
  }

  onChangeMain(option: any) {
    this.categories.forEach((item: ICategory) => {
      console.log(this.mainCatBind);

      if (this.mainCatBind === item.mainCat) {
        this.subCategories.add(item.subCat);
      }
    })
  }

  onChangeSub(option: any) {
    this.categories.forEach((item: ICategory) => {
      if (item.subCat?.match(this.subCatBind)) {
        this.childCategories_1.add(item.childCat_1);
        this.childCategories_2.add(item.childCat_2);
      }

    })
  }



}





