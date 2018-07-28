import { Vecino } from './../../Clases/Vecino';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements OnInit {
  currentUser: Vecino;
  isLoggedIn$: Observable<boolean>;

  constructor( public AuthenticationService: AuthenticationService) {
   
      
  }

  ngOnInit() {
    // this.currentUser = JSON.parse(localStorage.getItem('token'));
  }
}
