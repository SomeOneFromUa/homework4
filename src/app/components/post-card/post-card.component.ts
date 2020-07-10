import { Component, OnInit } from '@angular/core';
import {IPost} from '../../interfaces/post';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
post: IPost;
  constructor(private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.params.subscribe(value => this.post = history.state.post);
  }

  ngOnInit(): void {
  }
onCommetns = (postId: number): void => {
    this.route.navigate(['posts', postId, 'comments'], {state: {postId}});
};
}
