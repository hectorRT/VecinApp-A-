import { Vecino } from './../../Clases/Vecino';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable()
export class AuthenticationService {
    private Url = "http://localhost:3000/authentication";
    private obtenerdatos = "http://localhost:3000/authenticationt";
    private UrlToken = "http://localhost:3000/authenticationtoken";
    constructor(private http: HttpClient) {
        if (!localStorage.getItem('token')) {
            this.authenticated = false;
        } else
            this.authenticated = true;

    }

    expiresAt: number;
    userProfile: any;
    accessToken: string;
    authenticated: boolean;

    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    get isLoggedIn(): boolean {
        this.expiresAt = 1 * 1000 + Date.now();
        return (Date.now() < this.expiresAt) && this.authenticated;
    }
    getToken(email: string): Observable<any> {
        const url = `${this.UrlToken}/${email}`;

        return this.http.get<any>(url).pipe(
        );
    }
    ObtenerDatos(token: string): Observable<any> {
        const url = `${this.obtenerdatos}/${token}`;

        return this.http.get<any>(url).pipe(
        );
    }
    get(): Observable<any[]> {
        return this.http.get<any[]>(this.Url)
            .pipe();
    }
    login(vecino: Vecino): Observable<Vecino> {
        const url = `${this.Url}/${vecino.Email}`;
        return this.http.get<Vecino>(url).pipe();
    }
    Update(Vecino: Vecino): Observable<any> {
        return this.http.put<Vecino>(this.Url, Vecino, httpOptions).pipe();
    
      }
    cargartrue(value) {
        this.authenticated = true;
        this.getToken(value[0].Email).subscribe(token => {
            localStorage.setItem('token', token['token']);
            this.currentUser = new Vecino(
                value[0].IdVecino,
                value[0].IdVecindario,
                value[0].IdCargo,
                value[0].IdFrecuencia,
                value[0].Nombres,
                value[0].Apellidos,
                value[0].Cedula,
                value[0].Email,
                value[0].Clave,
                value[0].Direccion,
                token['token']
            );
            this.Update(this.currentUser).subscribe(value =>{
                
            })
            
        })
    }

    logout() {
        // remove user from local storage to log user out
        this.authenticated = false;
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
            value[0].Cedula,
            value[0].Email,
            value[0].Clave,
            value[0].Direccion);
    }

}