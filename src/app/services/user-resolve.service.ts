import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {IUser} from '../interfaces/user';
import {Observable} from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUser[]>{

  constructor(private userService: UserService) { }
  resolve(): Observable<IUser[]> {
    return this.userService.getUsers();
  }
}
