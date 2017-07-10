import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import {FormsModule} from '@angular/forms' ;
import {UserService} from './user/user.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { UserShowComponent } from './user/user-show.component';
import { UserNewComponent } from './user/user-new.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    UserShowComponent,
    UserNewComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'list', component: UserComponent },
      { path: 'user/:id', component: UserShowComponent },
      {path: 'new', component: UserNewComponent}
      ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
