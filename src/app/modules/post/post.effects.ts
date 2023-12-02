import { Injectable } from "@angular/core";
import { PostService } from "./post.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadingPosts, loadPostsSuccess, loadPostsFailure, addPost } from "./post.action";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { IPost, PostState } from "./post.state";


@Injectable()
export class PostEffects {

    constructor(
        private postService: PostService,
        private actions$: Actions
    ) { };


    loadPosts$ = createEffect(() => this.actions$
        .pipe(
            ofType(loadingPosts),
            mergeMap(() => this.postService.findAllPost()
                .pipe(
                    map(data => loadPostsSuccess({ posts: data.body })),
                    catchError((error: any) => of(loadPostsFailure({ error })))
                )
            )
        )
    );


    /*  addPost$ = createEffect(() => this.actions$.pipe(
         ofType(addPost),
         switchMap(action => this.postService.createPost(action.post).pipe(
             map(data => loadPostsSuccess({ posts: data.body })),
             catchError(error => of(loadPostsFailure({ error })))
         ))
     )); */



}