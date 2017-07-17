import { Component } from '@angular/core';
import { LocalStorageModule } from 'angular-2-local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  checklogin: boolean = false;
  constructor(){
    localStorage.getItem('token') ? this.checklogin = true : this.checklogin = false;
  }
}
