import { Component } from '@angular/core';
import { JsonObj } from 'src/assets/data/menu';
import * as menuObj from "src/assets/data/menu.json";


interface childItem {
  title: string;
  icon: string;
  path: string;
}

interface SubItem {
  title: string;
  icon: string;
  path: string;
  subMenu: childItem[];
}


interface IMenuItem {
  title: string;
  icon: string;
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
export class AngularMatLibraryComponent {
  nestedMenu: MainMenu = JsonObj;
}









