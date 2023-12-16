import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/_model/category.model';
import { CategoryService } from 'src/app/_services/category.service';
import * as nestedJson from 'src/assets/data/nestedJson.json'

@Component({
  selector: 'app-nforms',
  templateUrl: './nforms.component.html',
  styleUrls: ['./nforms.component.css']
})
export class NformsComponent implements OnInit {

  categories!: ICategory[];
  mainCategories: Set<any> = new Set();
  nForm!: FormGroup;
  ngmfcSelOption!: string;
  gender!: string;
  skills!: string;



  // using oop getter/setter method to get the value of the properties
  get name() { return this.nForm.get('name'); }
  get email() { return this.nForm.get('email'); }
  get password() { return this.nForm.get('password'); }
  get selectOption() { return this.nForm.get('fcSelOption') }


  constructor(private categoryService: CategoryService) { };

  ngOnInit(): void {
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

    this.nForm = new FormGroup({
      name: new FormControl('numan', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('numan@mail.com', [Validators.required, Validators.email]),
      password: new FormControl('pass124', [Validators.required, Validators.minLength(2)]),
      fcSelOption: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      skills: new FormControl('', Validators.required),
      matSkills: new FormControl('', Validators.required),
    });
  }


  onSubmit() {
    this.nForm.value.fcSelOption = [...this.mainCategories][2]
    console.log(this.nForm.value.name);
    console.log(this.nForm.value.email);
    console.log(this.nForm.value.password);
    console.log(this.nForm.value.fcSelOption);
    console.log(this.nForm.value);
  }

}
