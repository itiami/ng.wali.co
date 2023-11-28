import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPost, PostState } from './post.state';
import { addPost, loadingPosts } from './post.action';
import { selectAllPosts, selectPostError } from './post.selector';
import { PostService } from './post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts$!: Observable<IPost[]>;
  error$!: any;
  inp_title!: string;
  inp_body!: string;

  // post.component.ts
  constructor(
    private store: Store,
    private postService: PostService
  ) {
    this.posts$ = this.store.select(selectAllPosts);
    this.error$ = this.store.select(selectPostError);
  };

  ngOnInit(): void {
    this.store.dispatch(loadingPosts({ loading: true }));
  };

  addPost() {
    const newPost: IPost = {
      userId: Math.floor(Math.random() * 100),
      id: Math.floor(Math.random() * 1000),
      title: this.inp_title,
      body: this.inp_body,
    };
    this.store.dispatch(
      addPost(
        { post: newPost }
      )
    );
  };



}


