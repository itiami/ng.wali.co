import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/_shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './post.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    PostListComponent,
    EditPostComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    SharedModule,
    MatIconModule,
    StoreModule.forFeature('posts', postReducer),
    EffectsModule.forFeature(PostEffects),
    StoreDevtoolsModule.instrument({
      //maxAge: 25, // Retains last 25 states
      // logOnly: !isDevMode(), // Restrict extension to log-only mode
      // autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      // trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      // traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      // connectOutsideZone: true // If set to true, the connection is established outside the Angular zone for better performance
    }),
  ]
})
export class PostModule { }
