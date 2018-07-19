import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/index';
import { UserService } from '../_services/user.service'
import { AuthenticationService } from '../_services/authentication.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  isLoggedIn$: Observable<boolean>;

  constructor(private userService: UserService, private AuthenticationService: AuthenticationService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.isLoggedIn$ = this.AuthenticationService.isLoggedIn;
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
