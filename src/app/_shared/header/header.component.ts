import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren, ViewRef } from '@angular/core';
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
export class HeaderComponent implements OnInit, AfterViewInit {
  isDarkMode: boolean = false;

  username!: string;
  isLoggedIn!: boolean;
  navMenu: MainMenu = JSON.parse(JSON.stringify(menuObj));
  imgUrl = "../assets/img/logo256.png"


  @ViewChildren('_nTopForHover')
  //_nTopForHover!: ElementRef<HTMLAnchorElement>;
  _nTopForHover!: QueryList<ElementRef>;



  constructor(
    private themeService: ThemeService,
    private auth: AuthService,
    private router: Router,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    if (this.themeService.isDark) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.addClass(document.body, 'light-theme');
      this.isDarkMode = true;
    }

  }


  ngOnInit(): void {
    this.loggedIn();
    if (window.localStorage.getItem('username') !== null) {
      this.username = window.localStorage.getItem('username')!;
    }
  };


  ngAfterViewInit(): void {
    this._nTopForHover.forEach(el => {
      el.nativeElement.addEventListener('mouseover', () => {
        el.nativeElement.style.color = this.isDarkMode ? 'red' : 'yellow'
      })

      el.nativeElement.addEventListener('mouseleave', () => {
        el.nativeElement.style.color = this.isDarkMode ? '' : ''
      })
    });
  };


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
      console.log("isDark", this.isDarkMode);
      this.isDarkMode = !this.isDarkMode
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      this.renderer.addClass(document.body, 'light-theme');
      console.log("isDark", this.isDarkMode);
      this.isDarkMode = !this.isDarkMode
    }
  }







}
