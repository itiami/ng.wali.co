import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPost } from './post.state';
import { addPost, loadingPosts, deletePost } from './post.action';
import { selectAllPosts, selectPostError } from './post.selector';



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
    private store: Store
  ) {
    this.posts$ = this.store.select(selectAllPosts);
    //this.error$ = this.store.select(selectPostError);
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


  editPost(post: IPost) {
    alert(JSON.stringify({
      id: post.id,
      userId: post.userId,
      title: post.title,
      body: post.body
    }, null, 2))
  }

  deletePost(id: number) {
    this.store.dispatch(deletePost({ postId: id }));
  }


}


