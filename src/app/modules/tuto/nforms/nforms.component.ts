import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nforms',
  templateUrl: './nforms.component.html',
  styleUrls: ['./nforms.component.css']
})
export class NformsComponent implements OnInit {

  nForm!: FormGroup;

  // using oop getter/setter method to get the value of the properties
  get name() { return this.nForm.get('name'); }
  get email() { return this.nForm.get('email'); }
  get password() { return this.nForm.get('password'); }



  ngOnInit(): void {
    this.nForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
    console.log(this.x = "hi..");

  }

  onSubmit() {
    console.log(this.nForm.value);
  }

  x!: string;
}
