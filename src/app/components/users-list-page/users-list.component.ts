import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {IUser} from '../../interfaces/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
users: IUser[];
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.data.subscribe(value => this.users = value.users);
  }

  nawUser(user: IUser): void {
    this.router.navigate(['users', user.id], {state: user});
  }
}
