import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
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
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {
  navMenu: MainMenu = JSON.parse(JSON.stringify(menuObj));

  nestedMenu: MainMenu = JsonObj;


  ngOnInit(): void {
  }



}
