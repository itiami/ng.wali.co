import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PostState } from './post.state';

export const selectPostState = createFeatureSelector<PostState>('posts');

export const selectAllPosts = createSelector(
    selectPostState,
    (state) => state.posts
);

export const selectPostError = createSelector(
    selectPostState,
    (state) => state.error
);


export const exampleSelector = createSelector(selectPostState, (state) => {
    return state.posts;
}
);