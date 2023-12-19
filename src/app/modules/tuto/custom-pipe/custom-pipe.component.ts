import { Component, OnInit } from '@angular/core';
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
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {
  date!: Date;

  navMenu: MainMenu = JSON.parse(JSON.stringify(menuObj));


  searchKey = "Alice";

  arr = [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" },
    { "id": 3, "name": "Alice" },
  ]

  users = [
    { name: 'Alice', role: 'admin', isActive: true },
    { name: 'Bob', role: 'user', isActive: false },
    { name: 'Charlie', role: 'admin', isActive: true },
    { name: 'Dave', role: 'user', isActive: true }
  ];



  ngOnInit(): void {
    this.navMenu.menu.forEach(dt => {
      dt.subMenu?.forEach(sub => {
        sub.subMenu?.forEach(ch => {
          console.log(ch.title);

        })
      })
    })
  }


  onMenuItemClick(item: any) {
    console.log("item: ", item);
  }

  trackByFn() {
    console.log("trackByFn(): ");
  }

  getUnique() {
    let dt = this.arr.filter((val, idx, self) => self.findIndex(elm => elm.name === val.name) === idx)
    console.log(dt);
    this.arr.findIndex(elm => {
      console.log(elm.name === this.searchKey);
    })
    /* output true false true */
    this.arr.filter((val, idx, self) => console.log(val)
    )

  }


  // get the name of the admin from the users list..
  getNmae() {
    const activeAdmins = this.users
      .filter(user => user.isActive && user.role === 'admin') // Filter active admins
      .map(user => user.name) // Extract names
      .sort(); // Sort names alphabetically

    console.log("Active Admins are: ", activeAdmins); // Output: ['Alice', 'Charlie']
  }

  // output...
  // Alice, Charlie

}
