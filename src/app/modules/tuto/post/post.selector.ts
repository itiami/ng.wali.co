import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PostState } from './post.state';


// post.selector.ts
export const selectPostFutureState = createFeatureSelector<PostState>('appReducer_posts');


export const selectAllPosts = createSelector(selectPostFutureState, (state) => {
    return state.postArr
});


export const selectPostError = createSelector(selectPostFutureState, (state) => {
    return state.error
});


//export const exampleSelector = createSelector(selectPostFutureState, (state) => state.postArr);
