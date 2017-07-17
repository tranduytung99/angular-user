import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable' ;
import 'rxjs/add/operator/map';
import { User } from './user';
import {Home} from '../home/home';
import {Token} from './token' ;


@Injectable()

export class UserService{
  token : Token;
  headers: Headers;
  options: RequestOptions;
  private userUrl= "http://localhost:3000/api/v1/index/index_user";

  constructor(private http: Http){

    //console.log(localStorage.getItem('token') ) ;
    // localStorage.removeItem('token');
    this.headers = new Headers({'Content-Type':'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  getToken(user_name: string, password: string): Observable<Token>{
   return this.http.post("http://localhost:3000/oauth/token",{email: user_name, password: password,
     grant_type: "password" }).map((response: Response) => response.json() ).catch(this.handleError);
  }

  getUsers(): Observable<User[]>{
     return this.http.get(this.userUrl+"?access_token="+localStorage.getItem('token')).map((response: Response) => response.json() )
  }


  getUser(id: number): Observable<User>{
    return this.http.get("http://localhost:3000/api/v1/detail/"+id+"?access_token="+localStorage.getItem('token')).map(
     (res: Response) => res.json() ).catch(this.handleError);
  }


  createUser(user: User, home: Home): Observable<User>{
    return this.http.post("http://localhost:3000/api/v1/user/create", {email: user.email, password: user.password,
     home_name: home.name, access_token: localStorage.getItem('token')},this.options).map(
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

