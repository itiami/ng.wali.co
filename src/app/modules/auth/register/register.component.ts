// register.component.ts

import { Component } from '@angular/core';
import { User } from '../../../_model/user.model';
import { RegisterService } from 'src/app/_services/register.service';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userData = new User();

  constructor(
    private register: RegisterService,
    public router: Router
  ) { }


  // GET All User with Response status, header and body
  getUser() {
    this.register.getUser().subscribe(
      {
        next(res) {
          console.log("Response Status: " + res.status)
          console.log("Response headers: ")
          console.log(res.headers)
          console.log(res.body)
        },
        error(err) {
          console.log(err.status);
        },
        complete() {
        }
      }
    )
  }


  // POST Request Function for Register Button Click
  onSubmit() {
    let username = document.querySelector("#username") as HTMLInputElement;
    let password = document.querySelector("#password") as HTMLInputElement;
    let confirmPassword = document.querySelector("#confirm-password") as HTMLInputElement;
    let email = document.querySelector("#email") as HTMLInputElement;
    this.register.addUser(this.userData).subscribe(
      {
        next: (result) => {
          console.log(result.headers); // Object { normalizedNames: Map(0), lazyUpdate: null, lazyInit: lazyInit() }
          console.log(result.status); // 201
          console.log(result.body); // Object { username: "wafi", password: "walif", email: "wafi" }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.headers); // Object { normalizedNames: Map(0), lazyUpdate: null, lazyInit: lazyInit() }
          console.log(err.status); // 404
          console.log(err.statusText); // Not Found
          console.log(err.error.message); // User: james Exists
        },
        complete: () => {
          username.value = "";
          password.value = "";
          confirmPassword.value = "";
          email.value = "";
          alert("The Registration has Complete: \nThe User Email: " + this.userData.email)
          this.router.navigate(["auth/login"]);
        }
      }

    )
  }


}
