import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL_ENDPOINT = `http://${environment.backend.host}:${environment.backend.port}/api/`;

  constructor(private http: HttpClient) { }

  findAll(): Observable<HttpResponse<any>> {
    return this.http.get(
      this.URL_ENDPOINT + "profile",
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


  getToken(): string | null {
    return localStorage.getItem('token');
  }


}
