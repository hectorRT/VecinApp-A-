import { Vecino } from './../../Clases/Vecino';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class AuthenticationService {
    private Url = "http://localhost:3000/authentication";
    constructor(private http: HttpClient) {
        this.loggedIn.next(true);
    }

    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        this.loggedIn.next(true);
        return this.loggedIn.asObservable();
    }
    login(vecino: Vecino): Observable<Vecino> {
        const url = `${this.Url}/${vecino.Email}`;
        return this.http.get<Vecino>(url).pipe();
    }
    cargartrue() {
        this.loggedIn.next(true);
    }

    logout() {
        // remove user from local storage to log user out
        this.loggedIn.next(false);
        localStorage.removeItem('token');
    }
    currentUser: Vecino;

    public getUserInfo(): Vecino {

        return this.currentUser;
    }
    
    public asig(value) {
        this.currentUser = new Vecino(
            value[0].IdVecino, 
            value[0].IdVecindario, 
            value[0].IdCargo, 
            value[0].IdFrecuencia,
            value[0].Nombres,
            value[0].Apellidos,
            value[0].Cedula,);
            value[0].Email,
            value[0].Clave,
            value[0].Direccion
    }
}