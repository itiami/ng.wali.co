import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProductList } from "../_model/product-list.model";
import { environment } from 'src/environments/environment';
import { Category } from '../_model/category.model';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private URL_ENDPOINT = `http://${environment.backend.host}:${environment.backend.port}/api/`;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ProductList> {
    return this.http.get(`${this.URL_ENDPOINT}product`);
  }


  productDetail(product: ProductList): Observable<any> {
    return this.http.post(
      `${this.URL_ENDPOINT}findOne`,
      product,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        observe: 'response'
      }
    );
  }


  createProduct(product: ProductList): Observable<HttpResponse<any>> {
    return this.http.post(
      `${this.URL_ENDPOINT}product`,
      product,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        observe: 'response'
      }
    );
  }

  // POST Request
  getCategory(category: Category): Observable<HttpResponse<any>> {
    return this.http
      .post<{ token: string }>(
        this.URL_ENDPOINT + "user/findOneReqBody",
        category,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
          observe: 'response'
        }
      )
  }


}
