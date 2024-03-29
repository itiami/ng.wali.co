import { Component, ElementRef, HostListener, OnInit, ViewChild, } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { IPost } from '../post.state';
import { loadingPosts, deletePost, editPost } from '../post.action';
import { selectAllPosts, selectPostError } from '../post.selector';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditPostComponent } from '../edit-post/edit-post.component';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {

  posts$!: Observable<IPost[]>;
  error$!: any;
  postsTotal!: any;

  testInput = 15;

  @ViewChild('nItems')
  nItems!: ElementRef<HTMLInputElement>;

  onEnter(event: any) {
    console.log(event.target.value);
  }

  slice = (start: number, end?: number) => map((arr: any[]) => arr.slice(start, end));

  constructor(
    private store: Store,
    private dialog: MatDialog
  ) {
    this.posts$ = this.store.select(selectAllPosts).pipe(this.slice(0, 10));
    this.error$ = this.store.select(selectPostError);
  };

  ngOnInit(): void {
    this.store.dispatch(loadingPosts({ loading: true }));
    //this.postsTotal = this.store.dispatch(totalPost({total: this.store.dispatch(loadingPosts({ loading: true }))}))
  };


  /* editPost(post: IPost) {
    alert(JSON.stringify({
      id: post.id,
      userId: post.userId,
      title: post.title,
      body: post.body
    }, null, 2))
  } */

  deletePost(id: number) {
    this.store.dispatch(deletePost({ postId: id }));
  }


  openDialog(updatedPost: IPost): void {
    const dialogRef = this.dialog.open(EditPostComponent, {
      // configuration like width: '250px',
      data: updatedPost
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("dialogRef.afterClosed().subscribe(result): ", result.post);

      } else {
        // Cancel was clicked
        console.log("afterClosed(): ", 'clicked outside');
      }
    });


  }





}



