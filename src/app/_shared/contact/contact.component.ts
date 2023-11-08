import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthService } from 'src/app/_services/google-auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private gAuth: GoogleAuthService,
    private router: Router) { }

  gLogout() {
    this.gAuth.checkLogin();
    this.gAuth.googleLogout();
    this.router.navigate(["/auth/login"])
  }

}
