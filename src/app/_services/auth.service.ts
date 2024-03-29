// auth.service.ts
import { HttpClient, HttpContext, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = new BehaviorSubject<string | null>(null);
  private URL_ENDPOINT = `http://${environment.backend.host}:${environment.backend.port}/api/`;

  constructor(private http: HttpClient) { }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('username');
    this.token.next(null);
  }

  get isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  get tokenValue() {
    return this.token.asObservable();
  }



  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  allUser() {
    return this.http.get(
      this.URL_ENDPOINT + "user",
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        observe: "response",
        context: new HttpContext(),
        params: new HttpParams(),
        reportProgress: false,
        withCredentials: false
      }
    )
  }


  // POST Request
  userLogin(user: User): Observable<HttpResponse<any>> {
    return this.http
      .post<{ token: string }>(
        this.URL_ENDPOINT + "user/findOne",
        { filter: user }, // the req.body will be as below..

        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
          observe: 'response'
        }
      )
  }

  /* 
    req.body
    "filter": {
      "username": "Kyla",
      "password": "1234"
    }
  */
}


