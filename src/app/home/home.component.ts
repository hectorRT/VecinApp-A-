import { Vecino } from './../../Clases/Vecino';
import { AuthenticationService } from './../_services/authentication.service';
import { Component, OnInit } from '@angular/core';


@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

    currentUser: Vecino;
    users: Vecino[] = [];
    Nombres = '';
    IdVecino: number;
    constructor(public AuthenticationService: AuthenticationService) {
        if (localStorage.getItem('token')) {
            this.AuthenticationService.ObtenerDatos(localStorage.getItem('token')).subscribe(resultado => {
                this.Nombres = resultado[0].Nombres;
               this.IdVecino = resultado[0].IdVecino;
           })
        } else {
            AuthenticationService.authenticated = false;
            localStorage.removeItem('token');
        }
    }

    ngOnInit() {

    }


}