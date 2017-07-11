import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import {FormsModule} from '@angular/forms' ;
import {UserService} from './user/user.service';
import { HttpModule } from '@angular/http';

import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { UserShowComponent } from './user/user-show.component';
import { UserNewComponent } from './user/user-new.component';
import { UserSearchComponent } from './user/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    UserShowComponent,
    UserNewComponent,
    UserSearchComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: 'list', component: UserComponent },
      { path: 'user/:id', component: UserShowComponent },
      {path: 'new', component: UserNewComponent},
      {path: '', redirectTo:"", pathMatch:"full"}
      ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
