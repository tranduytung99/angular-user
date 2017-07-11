import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {User} from './user';
import {Home} from '../home/home';
import {Router} from '@angular/router';
import {UserService} from './user.service';

@Component({
  selector: 'user-new',
  templateUrl: 'user-new.component.html',
  styleUrls: ['user-new.component.css']
})

export class UserNewComponent {
  user = new User;
  home = new Home;
 // router: Router;
  submitted: boolean = false;

  constructor(private userService: UserService, private router: Router){
  }

  createUser(user: User,home: Home ){
    const router = "/list";
    this.submitted = true;
    this.userService.createUser(user,home).subscribe(data =>{this.router.navigate([router]) }, error =>{
      return Observable.throw(error);
    });
  }
}

