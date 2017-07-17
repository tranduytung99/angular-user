import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UserSearchService {

  checknull:string ;
  check: boolean = false;
  constructor(private http: Http) {}

  search_user(term: string = ""): Observable<User[]> {

    term != "" ? term : term = null;

    return this.http
      .get("http://localhost:3000/api/v1/search/"+term+"?access_token="+localStorage.getItem('token'))
      .map((response: Response) => <User[]>response.json() ).catch(this.handleError);
  }

    private handleError(error: any): Promise<any>{
     console.log("error", error);
     return Promise.reject(error.message || error);
   }


}
