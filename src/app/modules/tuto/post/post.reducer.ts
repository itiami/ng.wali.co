import { createReducer, on } from '@ngrx/store';
import { initialPostState } from './post.state';
import { addPost, loadPostsFailure, loadPostsSuccess, loadingPosts } from './post.action';



// post.reducer.ts
export const postReducer = createReducer(
  initialPostState,
  on(loadingPosts, (state, { loading }) => {
    return {
      ...state,
      loading
    }
  }),
  on(loadPostsSuccess, (state, { posts }) => {
    return {
      ...state,
      postArr: posts,
      loading: false
    }
  }),
  on(loadPostsFailure, (state, { error }) => {
    return {
      ...state,
      error,
      loading: false
    }
  }),
  on(addPost, (state, action) => ({
    ...state,
    postArr: [...state.postArr, action.post]
  }))
  // Handle other actions like update, delete
);
