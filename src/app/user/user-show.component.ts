import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import {UserService} from './user.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
 selector: 'show-user',
 templateUrl:"user-show.component.html"

})

export class UserShowComponent implements OnInit{
 id: number;
 userId: any;
 errorMessage: any ;
 editBt: boolean = false;
 user: User;
 returnUrl: string;

 constructor(

   private route: ActivatedRoute,
   private userService: UserService,
   private router: Router

   ){

 }

 ngOnInit(){
 // this.userId = this.route.params.subscribe( params => {this.id = +params['id'] } );
   this.returnUrl = "/list";
   let userRequest = this.route.params.flatMap( (params: Params)=>
      this.userService.getUser(+params['id'])
    );
   userRequest.subscribe( user => this.user = user.json() );
 }

  update(user: User){
   this.editBt = true ;
   this.userService.updateUser(this.user).subscribe(
     data => {return true}, error => console.log("loi update"));

  }

  delete(user: User){
    this.userService.deleteUser(this.user.id).subscribe(
      data =>{this.router.navigate([this.returnUrl])}
      , error => this.errorMessage || error );
  }

}
