import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './post.state';
import * as PostActions from './post.action';
import * as PostSelectors from './post.selector';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts$!: Observable<Post[]>;
  error$!: any;
  inp_title!: string;
  inp_body!: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(PostSelectors.selectAllPosts);
    this.error$ = this.store.select(PostSelectors.selectPostError);
    this.store.dispatch(PostActions.loadPosts());
  }

  addPost() {
    const newPost: Post = {
      userId: Math.floor(Math.random() * 100),
      id: Math.floor(Math.random() * 1000),
      title: this.inp_title,
      body: this.inp_body,
    };
    this.store.dispatch(PostActions.addPost({ post: newPost }));
  }

}


