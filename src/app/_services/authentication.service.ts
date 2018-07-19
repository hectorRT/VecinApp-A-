import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) {
        this.loggedIn.next(true);
     }

    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        this.loggedIn.next(true);
      return this.loggedIn.asObservable();
    }
    // login(username: string, password: string) {
    //     return this.http.post<any>('/api/authenticate', { username: username, password: password })
    //         .map(user => {
    //             // login successful if there's a jwt token in the response
    //             if (user && user.token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
                    
    //             }

    //             return user;
    //         });
    // }
    cargartrue(){
        this.loggedIn.next(true);
    }

    logout() {
        // remove user from local storage to log user out
        this.loggedIn.next(false);
        localStorage.removeItem('currentUser');
    }
}