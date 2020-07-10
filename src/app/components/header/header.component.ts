import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router ) { }

  nawUsers(): void {
    this.router.navigate(['users']);
  }

  nawPosts(): void {
    this.router.navigate(['posts']);
    history.state.id = undefined;
  }
}
