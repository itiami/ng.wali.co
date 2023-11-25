// ngrx-app-store/app.state.ts
//import { productReducer } from "../modules/product/product.reducer",

import { counterReducer } from "../modules/tuto/ngrx-counter/counter.reducer";
import { postReducer } from "../modules/tuto/post/post.reducer";


export const AppState = {
    counter: counterReducer,
    posts: postReducer
}
