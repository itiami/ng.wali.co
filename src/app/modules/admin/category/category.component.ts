import { Component } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categoryList: any = [];

  constructor(private categoryService: CategoryService) { }

  getCatagories(): void {
    this.categoryService.getCategory().subscribe(data => {
      if (data) {
        this.categoryList = data;
        console.log(data)
      }
    })
  }

  ngOnInit(): void {
    this.getCatagories();
  }

}
