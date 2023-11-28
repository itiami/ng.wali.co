import { createAction, props } from '@ngrx/store';
import { IPost } from './post.state';


// post.action.ts

export const loadingPosts = createAction(
  '[Post] Load Posts',
  props<{ loading: boolean }>()
);

export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ posts: IPost[] }>()
);

export const loadPostsFailure = createAction(
  '[Post] Load Posts Failure',
  props<{ error: string }>()
);



export const addPost = createAction(
  '[Post] Add Post',
  props<{ post: IPost }>()
);

export const editPost = createAction(
  '[Post] Edit Post',
  props<{ editPost: IPost }>()
)

export const deletePost = createAction(
  '[Post] Delete Post',
  props<{ postId: number }>()
)
