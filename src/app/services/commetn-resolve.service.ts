import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {IComment} from '../interfaces/Comments';
import {Observable} from 'rxjs';
import {CommentService} from './comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommetnResolveService implements Resolve<IComment[]>{

  constructor(private commentService: CommentService) { }
  resolve(): Observable<IComment[]> {
   const id: number = history.state.post.id;
   return this.commentService.getCommentsOfPost(id);
  }
}
