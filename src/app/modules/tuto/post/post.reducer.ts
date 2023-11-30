import { createReducer, on } from '@ngrx/store';
import { IPost, initialPostState } from './post.state';
import { addPost, deletePost, editPost, getPostById, loadPostsFailure, loadPostsSuccess, loadingPosts, totalPost } from './post.action';



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
  on(addPost, (state, action) => {
    let post = { ...action.post };
    post.id = (state.postArr.length + 1);
    return {
      ...state,
      postArr: [...state.postArr, post],
      loading: false
    }
  }),
  on(deletePost, (state, { postId }) => {
    const updatePost = state.postArr.filter(post => {
      return post.id !== postId;
    })
    return {
      ...state,
      loading: false,
      postArr: updatePost
    }
  }),
  on(editPost, (state, action) => {
    const updatedPost = state.postArr.map((data) => {
      if (action.post.id === data.id) {
        return action.post;
      } else {
        return data;
      }
    })
    return {
      ...state,
      loading: false,
      postArr: updatedPost
    }
  }),
  on(getPostById, (state, action) => {
    return {
      ...state,
      postId: action.postId
    }
  }),
  on(totalPost, (state, action) => {
    const count = state.postArr.length;
    return {
      ...state,
      total: count,
    }
  })
);
