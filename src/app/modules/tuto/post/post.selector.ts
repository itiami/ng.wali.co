import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PostState } from './post.state';


// post.selector.ts
export const selectPostFutureState = createFeatureSelector<PostState>('appReducer_posts');


export const selectAllPosts = createSelector(selectPostFutureState, (state) => {
    //return state.postArr

    // to sort by id 
    return state.postArr.slice().sort((a, b) => {
        return b.id - a.id
    })
});


export const selectPostError = createSelector(selectPostFutureState, (state) => {
    return state.error
});


export const selectPostById = createSelector(selectPostFutureState, (state) => {
    return state.postArr[0].id
})


//export const exampleSelector = createSelector(selectPostFutureState, (state) => state.postArr);
