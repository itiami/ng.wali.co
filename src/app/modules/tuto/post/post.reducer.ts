import { createReducer, on } from '@ngrx/store';
import { initialPostState } from './post.state';
import * as PostActions from './post.action';

export const postReducer = createReducer(
  initialPostState,
  on(PostActions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts: posts,
    error: null
  })),
  on(PostActions.loadPostsFailure, (state, { error }) => ({
    ...state,
    error: error
  })),
  on(PostActions.addPost, (state, { post }) => ({
    ...state,
    posts: [...state.posts, post]
  }))
  // Handle other actions like update, delete
);
