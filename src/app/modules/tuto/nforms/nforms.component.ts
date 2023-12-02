import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nforms',
  templateUrl: './nforms.component.html',
  styleUrls: ['./nforms.component.css']
})
export class NformsComponent implements OnInit {

  nForm!: FormGroup;


  ngOnInit(): void {
    this.nForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  onSubmit() {
    console.log(this.nForm.value);
  }
}
