import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {


  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }


  logout() {
    this.auth.logout();
    this.router.navigate(["/auth/login"]);
  }

}
