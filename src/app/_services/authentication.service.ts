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
    cargartrue(){
        this.loggedIn.next(true);
    }

    logout() {
        // remove user from local storage to log user out
        this.loggedIn.next(false);
        localStorage.removeItem('token');
    }
}