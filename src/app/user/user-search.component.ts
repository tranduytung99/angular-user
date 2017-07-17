import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { UserSearchService } from './user-search.service';
import { User } from './user';

@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: [ './user-search.component.css' ],
  providers: [UserSearchService]
})
export class UserSearchComponent {
  users: User[];

  constructor(private usersearchService: UserSearchService) {

  }

  search_user(term: string) {
    this.usersearchService.search_user(term)
      .subscribe(userss => this.users = userss);
  }
}
