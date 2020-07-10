import {Component, OnDestroy, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
user: IUser;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      this.user = history.state;
    });

  }

  ngOnInit(): void {
  }

  showPosts(): void {
    this.router.navigate(['users', this.user.id, 'posts'], {state: {id: this.user.id}});
  }
}
