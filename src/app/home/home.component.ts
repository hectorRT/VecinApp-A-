import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';

@Component({
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('token'));
    }

    ngOnInit() {
        
    }
}