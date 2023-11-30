import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPost } from '../post.state';
import { addPost, loadingPosts } from '../post.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postsTotal?: any;
  inp_title!: string;
  inp_body!: string;

  constructor(private store: Store) { };

  ngOnInit(): void {
    this.store.dispatch(loadingPosts({ loading: true }));
  };

  addPost() {
    const newPost: IPost = {
      userId: Math.floor(Math.random() * 100),
      id: 0,
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
