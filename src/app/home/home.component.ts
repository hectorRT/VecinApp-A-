import { AuthenticationService } from './../_services/authentication.service';
import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    Nombres = '';
    IdVecino:number;
    constructor(public AuthenticationService:AuthenticationService) {
        this.currentUser = JSON.parse(localStorage.getItem('token'));

        
        let info = this.AuthenticationService.getUserInfo();
    this.Nombres = info['Nombres'];
    this.IdVecino = info['IdVecino'];
    }

    ngOnInit() {
        
    }

    
}