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
  form!: FormGroup;

  matchOption_1: ICategory[] = [];

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



  subjects = {
    'mainCat': 'Electronics',
    'subCat': 'Hard Drive',
  };



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
          this.subCategories.add(item.subCat);
          this.childCategories_1.add(item.childCat_1);
          this.childCategories_2.add(item.childCat_2);
        })
      }
    })
  }

  onSelectionChange(arg: any) {
    this.categories.forEach(dt => {
      if (arg.target.value === dt.mainCat) {
        if (this.matchOption_1.length > 0 && this.matchOption_1[0].mainCat !== arg.target.value) {
          this.matchOption_1.length = 0;
          this.matchOption_1.push(dt);
        } else {
          this.matchOption_1.push(dt);
        }
      };
    });
  };

}





