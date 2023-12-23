import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild, ViewRef } from '@angular/core';
import * as menuObj from "src/assets/data/menu.json";
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/_services/theme.service';


interface ISvgIcon {
  iconName: string;
  iconPath: string;
}

interface IMenuItem {
  title: string;
  icon: string;
  svgIcon: ISvgIcon;
  iconColor: string;
  path: string;
  subMenu?: IMenuItem[];
}


interface MainMenu {
  menu: IMenuItem[];
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDarkMode: boolean = false;

  username!: string;
  isLoggedIn!: boolean;
  navMenu: MainMenu = JSON.parse(JSON.stringify(menuObj));
  imgUrl = "../assets/img/logo256.png"


  @ViewChild("html")
  htmlElem!: ElementRef;

  constructor(
    private themeService: ThemeService,
    private auth: AuthService,
    private router: Router,
    private renderer: Renderer2
  ) {
    this.themeService.isDark ? this.renderer.addClass(document.body, 'dark-theme') : this.renderer.addClass(document.body, 'light-theme');
  }


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
    if (this.isDarkMode) {
      this.renderer.removeClass(document.body, 'light-theme');
      this.renderer.addClass(document.body, 'dark-theme')
      this.isDarkMode = !this.isDarkMode
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      this.renderer.addClass(document.body, 'light-theme');
      this.isDarkMode = !this.isDarkMode
    }
    console.log(this.isDarkMode);

  }

}
