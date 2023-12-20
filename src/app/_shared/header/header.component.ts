import { Component, ElementRef, HostListener, Input, OnInit, ViewChild, ViewRef } from '@angular/core';
import { navBarItems } from './header_items';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/_services/theme.service';

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
    private theme: ThemeService,
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
    window.localStorage.getItem('token') !== null ?
      this.isLoggedIn = true
      : this.isLoggedIn = false;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(["/auth/login"]);
  }


  onClickMode() {
    const colorMode = window.matchMedia("(prefers-color-scheme: dark)")
    if (colorMode.matches) {
      console.log("idDark: ", colorMode.matches);
    } else {
      console.log("isLight: ", colorMode.matches);
    }

  }

}
