// ngrx-app-store/app.state.ts
//import { productReducer } from "../modules/product/product.reducer",

import { counterReducer } from "../modules/counter/counter.reducer";
import { postReducer } from "../modules/post/post.reducer";
import { ICounterState } from "../modules/counter/counter.state";
import { IPost, PostState } from "../modules/post/post.state";


// app.state.ts
export const AppReducer = {
    counter: counterReducer,
    appReducer_posts: postReducer
}


/* export interface IAppState {
    counter: ICounterState;
    appState_posts: IPost;
} */