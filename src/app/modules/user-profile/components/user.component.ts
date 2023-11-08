import { Component, OnInit } from '@angular/core';
import { User } from '../models/profile.model';
import { UserService } from '../../../_services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users?: User[];

  constructor(private userService: UserService) { }


  listUser(): void {
    this.userService.findAll()
      .subscribe({
        next: (data => {
          this.users = data.body;
          console.log(data.status);
        }),
        error: (err: HttpErrorResponse) => {
          alert(err.error.message)
        }
      })
  }



  ngOnInit(): void {
    this.listUser();
  }


}
