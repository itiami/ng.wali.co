import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { JsonObj } from 'src/assets/data/menu';
import * as menuObj from "src/assets/data/menu.json";
import { tsCodeBlock_1, tsCodeBlock_2, angular_reserved_keywords } from './ts-code';



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
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {
  regex = /[\s.=>{}();'":]+/;
  navMenu: MainMenu = JSON.parse(JSON.stringify(menuObj));
  nestedMenu: MainMenu = JsonObj;
  tsCode: string = tsCodeBlock_2;
  arrLines: any[] = [];
  dataType = angular_reserved_keywords;
  //dataType = ["goto", "if", "implements", "import",];

  ngOnInit(): void {
    this.styleAngular();
  }



  styleAngular() {
    let lines = this.tsCode.split('\n');
    console.log(lines.length);

    //lines.find(dt => console.log(dt === 'import'))

    lines.forEach(ln => {
      this.dataType.keywords.forEach(dt => {
        let res = ln.match(dt);
        res !== null && this.arrLines.push(res);
      })
    })
    console.log(this.arrLines);
  }

}
