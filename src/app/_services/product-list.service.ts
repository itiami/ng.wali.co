import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduct, ProductList } from "../_model/product-list.model";
import { environment } from 'src/environments/environment';
import { Category } from '../_model/category.model';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private URL_ENDPOINT = `http://${environment.backend.host}:${environment.backend.port}/api/`;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.URL_ENDPOINT}product`);
  }


  productDetail(product: IProduct): Observable<any> {
    return this.http.post<IProduct>(
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


  updateProduct() {

  };

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

  //updateProduct(){}





}


