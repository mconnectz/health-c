import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from './user.model';


@Injectable()
export class UserService {

  private url='http://localhost:3000';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.url+'/register', user);
  }

  login(credentials): Observable<any> {
    return this.http.post<any>(this.url+'/login', credentials);
  }

}
