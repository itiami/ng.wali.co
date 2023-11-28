// ngrx-app-store/app.state.ts
//import { productReducer } from "../modules/product/product.reducer",

import { counterReducer } from "../modules/tuto/ngrx-counter/counter.reducer";
import { postReducer } from "../modules/tuto/post/post.reducer";
import { ICounterState } from "../modules/tuto/ngrx-counter/counter.state";
import { IPost, PostState } from "../modules/tuto/post/post.state";


// app.state.ts
export const AppReducer = {
    counter: counterReducer,
    appReducer_posts: postReducer
}


/* export interface IAppState {
    counter: ICounterState;
    appState_posts: IPost;
} */