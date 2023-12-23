import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
import { MatMenuPanel, MatMenuTrigger } from '@angular/material/menu';
import { JsonObj } from 'src/assets/data/menu';
import * as menuObj from "src/assets/data/menu.json";


/* interface childItem {
  title: string;
  icon: string;
  svgIcon?: string;
  path: string;
}

interface SubItem {
  title: string;
  icon: string;
  svgIcon?: string;
  path: string;
  subMenu: childItem[];
} */

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
  selector: 'app-angular-mat-library',
  templateUrl: './angular-mat-library.component.html',
  styleUrls: ['./angular-mat-library.component.css']
})
export class AngularMatLibraryComponent implements OnInit {
  nestedMenu: MainMenu = JsonObj;
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  showFiller = false;


  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.nestedMenu.menu.map(mainItems => {
      if (mainItems.svgIcon?.iconName) {
        this.matIconRegistry.addSvgIcon(
          mainItems.svgIcon?.iconName,
          this.domSanitizer.bypassSecurityTrustResourceUrl(mainItems.svgIcon!.iconPath)
        )
      }
    })
  }



  ngOnInit(): void {
    this.nestedMenu.menu.map(mainItems => {
      if (mainItems.svgIcon?.iconName) {
        console.log(mainItems.svgIcon?.iconName);
        console.log(mainItems.svgIcon!.iconPath);
      }
    })
  }
}









