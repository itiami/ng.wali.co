import { HttpClient, HttpContext, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category, ICategory } from '../_model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private URL_ENDPOINT = `http://${environment.backend.host}:${environment.backend.port}/api`;

  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<HttpResponse<any>> {
    return this.http.get<ICategory>(
      `${this.URL_ENDPOINT}/category`,
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
  getCategory(category: Category): Observable<HttpResponse<any>> {
    return this.http
      .post<{ token: string }>(
        this.URL_ENDPOINT + "category/findOneReqBody",
        category,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
          observe: 'response'
        }
      )
  };

}
