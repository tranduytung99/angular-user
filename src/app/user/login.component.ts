import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {User} from './user';
import {Home} from '../home/home';
import {Router} from '@angular/router';
import {UserService} from './user.service';
import {Token} from './token' ;
//import { LocalStorageModule } from 'angular-2-local-storage';


@Component({
  selector: 'login',
  templateUrl:'login.component.html'
})

export class LoginComponent {
  user = new User;
  home = new Home;
  token :string;

  constructor(private userService: UserService, private router: Router){
  }

  login(user: string, password: string){
    const token = this.userService.getToken(user,password)
      .subscribe(token => localStorage.setItem('token', token.access_token));
    //console.log("token:"+ this.token);
  }
}

