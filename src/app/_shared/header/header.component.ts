import { Component, Input } from '@angular/core';
import { navBarItems } from './header_items';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuItems = navBarItems;
  imgUrl = "../assets/img/logo256.png"

  navBar = {
    title: ""
  }

  @Input() _inpUsername?: String;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }


  logout() {
    this.auth.logout();
    this.router.navigate(["/auth/login"]);
  }

}
