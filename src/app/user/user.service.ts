import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable' ;
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class UserService{

  headers: Headers;
  options: RequestOptions;
  private userUrl= "http://localhost:3000/api/v1/index/index_user";

  constructor(private http: Http){

    this.headers = new Headers({'Content-Type':'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  getUsers(): Observable<User[]>{
     return this.http.get(this.userUrl)
       .map((response: Response) => <User[]>response.json() )
  }

  getUser(id: number){
    return this.http.get("http://localhost:3000/api/v1/detail/"+id);
  }

  createUser(user: User): Observable<User>{
    // let headers = new Headers({'Content-Type':'application/json'});
    // let options = new RequestOptions({headers: headers});

    return this.http.post("http://localhost:3000/api/v1/user/create", JSON.stringify(user),this.options).map(
     (res: Response) => res.json() );
  }

   updateUser(user: User): Observable<User>{
    const url = "http://localhost:3000/api/v1/update/"+ user.id ;
    return this.http.put(url, JSON.stringify(user), this.options).map(
     (res: Response) => res.json() ).catch(this.handleError);

   }

   deleteUser(id: number): Observable<User>{
    const url = "http://localhost:3000/api/v1/delete/"+id ;
    return this.http.delete(url,this.options).map(
     (res: Response) => res.json() ).catch(this.handleError);
   }


   private handleError(error: any): Promise<any>{
     console.log("error", error);
     return Promise.reject(error.message || error);
   }

}
