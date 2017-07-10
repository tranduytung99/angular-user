import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { User } from './user';
import { Router } from '@angular/router';
import {UserService} from './user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
   let timer = Observable.timer(0, 5000);
   timer.subscribe( () => this.getUsers() );
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(userss => this.users = userss);
  }
}
