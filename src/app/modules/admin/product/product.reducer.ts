import {
    loadProductFailure,
    loadingProducts,
    loadProductsSuccess,
    addProduct,
    deleteProduct,
    updateProduct
} from "./product.action";


import { Action, createReducer, on } from "@ngrx/store";
import { initialProductState, productAdapter } from "./product.state";



/* export function productReducerFn(state = initialProductState, action: any) {
    switch (action.type) {
        case loadProductsSuccess.type:
            return productAdapter.setAll(state, action.)
    }
} */



export const productReducer = createReducer(
    initialProductState,
    on(loadProductFailure, (state, action) => {
        return {
            ...state,
            error: action.err
        }
    }),
    on(addProduct, (state, action) => {
        return productAdapter.addOne(action.product, state)
    }),
    on(deleteProduct, (state, action) => {
        return productAdapter.removeOne(action.productId, state)
    }),
    /* on(updateProduct, (state, action) => {
        return productAdapter.updateOne(action.updatedProduct, state);
    }), */
    on(loadProductsSuccess, (state, action) => {
        return productAdapter.setAll(action.products, state)
    })


)




