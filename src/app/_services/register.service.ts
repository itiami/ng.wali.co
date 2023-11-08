// register.component.ts

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_model/user.model';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private token = new BehaviorSubject<string | null>(null);
  private URL_ENDPOINT = `http://${environment.backend.host}:${environment.backend.port}/api/`;
  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // GET All User with Response status, header and body
  getUser() {
    return this.http.get(this.URL_ENDPOINT + "user", {
      observe: "response"
    });
  }


  // POST Request with header option..
  /* addUser(user: User): Observable<User> {    
    return this.http
      .post<User>(
        this.endPoint,
        user,
        this.httpOptions
      );
  } */

  addUser(user: User): Observable<HttpResponse<any>> {
    return this.http
      .post(
        this.URL_ENDPOINT,
        user,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
          observe: 'response'
        }
      )
  }
}
