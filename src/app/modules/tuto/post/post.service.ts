import { HttpClient, HttpContext, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from './post.state';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  URL_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }


  findAllPost(): Observable<HttpResponse<any>> {
    return this.http.get<IPost>(
      this.URL_ENDPOINT,
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


}
