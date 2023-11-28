import { Injectable } from "@angular/core";
import { PostService } from "./post.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadingPosts, loadPostsSuccess, loadPostsFailure } from "./post.action";
import { catchError, map, mergeMap, of } from "rxjs";
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
}