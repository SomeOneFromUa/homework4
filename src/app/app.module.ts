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
import { UsersListComponent } from './components/users-list/users-list.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';

const routes: Routes = [
  {path: 'users', component: UsersListComponent},
  {path: 'posts', component: PostListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersListComponent,
    PostListComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [UserService, PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
