import { Component, OnInit } from '@angular/core';
import {PostResolveService} from '../../services/post-resolve.service';
import {ActivatedRoute} from '@angular/router';
import {IPost} from '../../interfaces/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
posts: IPost[];
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.posts = value.posts);

  }

  ngOnInit(): void {
  }

}
