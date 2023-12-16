import { Component, ElementRef, HostListener, Input, OnInit, ViewChild, ViewRef } from '@angular/core';
import { navBarItems } from './header_items';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  darkMode: boolean = false;
  username!: string;
  isLoggedIn!: boolean;
  menuItems = navBarItems;
  imgUrl = "../assets/img/logo256.png"

  navBar = {
    title: ""
  }

  @ViewChild("html")
  htmlElem!: ElementRef;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.loggedIn();
    if (window.localStorage.getItem('username') !== null) {
      this.username = window.localStorage.getItem('username')!;
    }
  }


  @HostListener('isLoggedIn') loggedIn() {
    if (window.localStorage.getItem('token') !== null) {
      this.isLoggedIn = true;

    } else {
      this.isLoggedIn = false;
    }

  }

  logout() {
    this.auth.logout();
    this.router.navigate(["/auth/login"]);
  }


  onClickMode() {
    this.darkMode = true;


  }

}
