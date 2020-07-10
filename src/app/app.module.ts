import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {PostService} from './services/post.service';
import {CommentService} from './services/comment.service';
import { HeaderComponent } from './components/header/header.component';
import { UsersListComponent } from './components/users-list-page/users-list.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {UserResolveService} from './services/user-resolve.service';
import { PostComponent } from './post/post.component';
import {PostResolveService} from './services/post-resolve.service';
import {MatButtonModule} from '@angular/material/button';
import { PostListPageComponent } from './components/post-list-page/post-list-page.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentComponent } from './components/comment/comment.component';
import {CommetnResolveService} from './services/commetn-resolve.service';

const routes: Routes = [
  {path: 'users', component: UsersListComponent, resolve: {users: UserResolveService},
    children: [
      {path: ':id', component: UserCardComponent,
        children: [
          {path: 'posts', component: PostListComponent, resolve: {posts: PostResolveService}},
        ]},
    ]},
  {path: 'posts', component: PostListPageComponent, resolve: {posts: PostResolveService},
  children: [
    {path: ':id', component: PostCardComponent, children: [
        {path: 'comments', component: CommentsListComponent, resolve: {comments: CommetnResolveService}}
      ]},
  ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersListComponent,
    PostListComponent,
    UserCardComponent,
    PostComponent,
    PostListPageComponent,
    PostCardComponent,
    CommentsListComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [UserService, PostService, CommentService, UserResolveService, PostResolveService, CommetnResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
