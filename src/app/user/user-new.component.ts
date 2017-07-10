import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {User} from './user';
import {UserService} from './user.service';

@Component({

  selector: 'user-new',
  templateUrl: 'user-new.component.html'
})

export class UserNewComponent {
  user = new User;
  submitted: boolean = false;

  constructor(private userService: UserService){}

  createUser(user: User ){
    this.submitted = true;
    this.userService.createUser(user).subscribe(data => {return true}, error =>{
      return Observable.throw(error);
    });
  }
}

