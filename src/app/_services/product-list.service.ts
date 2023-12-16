import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduct, ProductList } from "../_model/product-list.model";
import { environment } from 'src/environments/environment';
import { Category, ICategory } from '../_model/category.model';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private URL_ENDPOINT = `http://${environment.backend.host}:${environment.backend.port}/api`;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<HttpResponse<any>> {
    return this.http.get<IProduct>(
      `${this.URL_ENDPOINT}/product`,
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


  productDetail(product: IProduct): Observable<any> {
    return this.http.post<IProduct>(
      `${this.URL_ENDPOINT}/product/findOne`,
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
      `${this.URL_ENDPOINT}/product`,
      product,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        observe: 'response'
      }
    );
  }





  updateProduct(product: IProduct): Observable<HttpResponse<any>> {
    return this.http.put<IProduct>(
      this.URL_ENDPOINT + "/product",
      product,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        observe: 'response'
      }
    )
  }


  deleteProduct(product: ProductList): Observable<HttpResponse<any>> {
    return this.http.post(
      this.URL_ENDPOINT + "product/delProd",
      { query: product },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        observe: 'response'
      }
    )
  };

}


