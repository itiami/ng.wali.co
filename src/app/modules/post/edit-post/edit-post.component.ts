import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IPost } from '../post.state';
import { editPost, } from '../post.action';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  form!: FormGroup;
  isUpdateMode!: boolean;

  //post!: IPost;
  inp_id!: number;
  inp_userId!: number;
  inp_title!: string;
  inp_body!: string;


  constructor(
    private store: Store,
    private matDialogRef: MatDialogRef<EditPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPost
  ) { };



  ngOnInit(): void {
    this.inp_id = this.data.id;
    this.inp_userId = this.data.userId;
    this.inp_title = this.data.title;
    this.inp_body = this.data.body;
  }


  dialogOK() {
    const updatedPost: IPost = {
      id: this.inp_id,
      userId: this.inp_userId,
      title: this.inp_title,
      body: this.inp_body,
    };
    this.store.dispatch(editPost({ post: updatedPost }));
    this.matDialogRef.close({ post: updatedPost });
  }

  dialogCancel() {
    console.log("Cancelled...");
    this.matDialogRef.close();
  }


}
