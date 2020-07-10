import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {IUser} from '../../interfaces/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
users: IUser[];
  constructor(private userService: UserService, private router: Router) {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  nawUser(user: IUser): void {
    this.router.navigate(['users', user.id]);
  }
}
