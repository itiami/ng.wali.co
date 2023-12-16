import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadingProducts, loadProductsSuccess, loadProductFailure, addProduct, updateProduct, deleteProduct } from "./product.action";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { ProductListService } from 'src/app/_services/product-list.service';

@Injectable()
export class ProductEffects {

  loadProduct$ = createEffect(() => this.actions$
    .pipe(
      ofType(loadingProducts),
      mergeMap(
        () => this.productService.getAllProducts()
          .pipe(
            map(data => loadProductsSuccess({ products: data.body })),
            catchError((err: any) => of(loadProductFailure({ err })))
          )
      )
    )

  );

  constructor(
    private actions$: Actions,
    private productService: ProductListService
  ) { }
}
