import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../_model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private URL_ENDPOINT = `http://${environment.backend.host}:${environment.backend.port}/api`;

  constructor(private http: HttpClient) { }


  // POST Request
  getCategory(): Observable<Category> {
    return this.http.get(`${this.URL_ENDPOINT}/category`);
  }

}
