import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../services/comment.service';
import {IComment} from '../../interfaces/Comments';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
commetns: IComment[];
  // constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
  //   this.activatedRoute.params
  //     .subscribe(value => this.commentService.getCommentsOfPost(history.state.postId)
  //       .subscribe(value1 => this.commetns = value1));
  // }
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.commetns = value.comments);
  }
  ngOnInit(): void {
  }

}
