import { createAction, props } from '@ngrx/store';
import { ProductState } from './product.state';

export const loadProducts = createAction('[Product] Load Products');

export const loadProductsSuccess = createAction(
    '[Product] Load Products Success',
    props<{ products: ProductState[] }>()
);

export const addProduct = createAction(
    '[Product] Add Product',
    props<{ product: ProductState }>()
);

export const updateProduct = createAction(
    '[Product] Update Product',
    props<{ product: ProductState }>()
);

export const deleteProduct = createAction(
    '[Product] Delete Product',
    props<{ productId: number }>()
);
