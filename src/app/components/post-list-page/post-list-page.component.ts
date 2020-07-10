import { Component, OnInit } from '@angular/core';
import {IPost} from '../../interfaces/post';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.css']
})
export class PostListPageComponent implements OnInit {
  posts: IPost[];
  constructor(private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.data.subscribe(value => this.posts = value.posts);
  }
  ngOnInit(): void {
  }

  openPost(post: IPost): void {
    window.scroll(0,0);
    this.route.navigate(['posts', post.id], {state: {post}});
  }
}
