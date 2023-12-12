import { createAction, props } from '@ngrx/store';
import { ProductState } from './product.state';
import { IProduct } from 'src/app/_model/product-list.model';



export const loadingProducts = createAction('[Product] Load Products');

export const loadProductsSuccess = createAction(
    '[Product] Load Products Success',
    props<{ products: IProduct[] }>()
);


export const loadProductFailure = createAction(
    '[Product] Load Products Failure',
    props<{ err: Error }>()
)

export const addProduct = createAction(
    '[Product] Add Product',
    props<{ product: IProduct }>()
);

export const updateProduct = createAction(
    '[Product] Update Product',
    props<{ updatedProduct: IProduct }>()
);

export const deleteProduct = createAction(
    '[Product] Delete Product',
    props<{ productId: number }>()
);
