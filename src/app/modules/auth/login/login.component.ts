// login.component.ts
import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { User } from '../../../_model/user.model';
import { MatDialog } from '@angular/material/dialog';
import { TermsConditionComponent } from 'src/app/_shared/terms-condition/terms-condition.component';
import { HttpErrorResponse } from '@angular/common/http';
import { GoogleAuthService } from 'src/app/_services/google-auth.service';
import firebase from 'firebase/compat/app';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [

  ]
})
export class LoginComponent implements OnInit {

  username: String = "";
  password: String = "";
  userData = new User("", "");
  fieldType?: Boolean;
  //dialog =  new MatDialog();
  users: any = [];


  constructor(
    private elementRef: ElementRef,
    private _router: Router,
    private auth: AuthService,
    private dialog: MatDialog,
    private gAuth: GoogleAuthService
  ) { }


  getAllUser() {
    this.auth.allUser().subscribe({
      next: data => {
        this.users = data;
      },
      error: err => {
        console.log("Status Code: " + this.users.status);
        this.users = err;
      },
      complete: () => {
        console.log(this.users);
        // so in .component.html we will use users.body for *ngFor loop to render data in html file
      }
    })
  }



  onSubmit() {
    //debugger // this keyword allow us to open the browser debugger while execute this onSubmit() function
    let usernameEl = document.querySelector("#username") as HTMLInputElement;
    let passwordEl = document.querySelector("#password") as HTMLInputElement;
    if (usernameEl.value != "" && passwordEl.value != "") {
      this.auth.userLogin(this.userData).pipe().subscribe(
        {
          next: res => {
            console.log(res.body); // Object { auth: true, token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphbWVzIiwicGFzc3dvcmQiOiJqYW1lcyIsImlhdCI6MTY5Nzk3Nzg5NCwiZXhwIjoxNjk4MDY0Mjk0fQ.MmKJlJD4NHNY1FNTcy_GzVXy2Zr32ZgSEvVs0CQj_gf-M_DZ09EvG55wqMBqVH89-AJDPWWnOYkqrEzAv847rw" }
            console.log(res); // Object { headers: {…}, status: 200, statusText: "OK", url: "http://192.168.1.235:3090/api/user/findOneReqBody", ok: true, type: 4, body: {…} }
            console.log(res.ok); // true
            console.log(res.status); // 200
            console.log(res.statusText); // "OK"
            localStorage.setItem("token", res.body.token);
            window.sessionStorage.setItem("token", res.body.token);
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.error.message); // user Not Found ... this is a custom message from backend
            console.log(error.status); // 404
            console.log(error.statusText); // Not Found .. this is default 404 message
          },
          complete: () => {
            usernameEl.value = "";
            passwordEl.value = "";
            usernameEl.focus();
            this._router.navigate(["/admin"]);
          }
        }
      )
    } else {
      alert("Username and Password Fields can not be empty")
    }
  }

  openTermsConditionDialog() {
    const dialogRef = this.dialog.open(TermsConditionComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  popupMsg(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }


  ngAfterViewInit(): void {
    // Access the native element using this.elementRef.nativeElement
    const loginBtn = this.elementRef.nativeElement.querySelector('#loginBtn') as HTMLElement;
  }

  toggleFieldTextType() {
    this.fieldType = !this.fieldType;
  }

  // Your click event handler logic here
  handleClick() {
    this._router.navigate(['register']);
  }


  async googleLogin() {
    try {
      const userCredential = await this.gAuth.googleSignIn();
      // Handle signed in user
      userCredential.user?.getIdToken().then(token => {
        console.log(token); // this return the token..
      });

      const x = userCredential.credential as firebase.auth.OAuthCredential;
      localStorage.setItem("gToken", x.accessToken as string);

      this._router.navigate(["/contact"])

    } catch (error) {
      // Handle errors here
      console.error('Login Component: Google sign-in error', error);
    }
  }




  githubLogin() {
    alert("Github Login..")
  }

  microsoftLogin() {
    alert("Microsoft Login..")
  }

  linkedInLogin() {
    alert("LinkedIn Login..")
  }

  ngOnInit(): void {
    this.getAllUser();
  }

}



