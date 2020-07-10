import { Injectable } from '@angular/core';
import {ActivatedRoute, Resolve} from '@angular/router';
import {IPost} from '../interfaces/post';
import {Observable} from 'rxjs';
import {PostService} from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<IPost[]>{

  constructor(private postsService: PostService ) { }
  resolve(): Observable<IPost[]> {
    const id: number | undefined = history.state.id;
    console.log(history.state.id);
    return !!id
      ?  this.postsService.getPostsOfUser(history.state.id)
      :  this.postsService.getPosts();
  }
}
