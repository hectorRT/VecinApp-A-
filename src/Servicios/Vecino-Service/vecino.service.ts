import { Injectable } from '@angular/core';
import { catchError, tap } from "rxjs/operators";

import { Observable } from "rxjs/observable";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import {of} from "rxjs/observable/of";

import { Vecino } from "../../Clases/Vecino";

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable()
export class VecinoService {

  private VecinoUrl="http://localhost:3000/vecinos";
  private VecinoEmailUrl="http://localhost:3000/Vecinos/Email";
  constructor(private http:  HttpClient) { }

  getVecinos(): Observable<Vecino[]> {

    return this.http.get<Vecino[]>(this.VecinoUrl)
      .pipe(
        tap(heroes => this.log('fetched Vecinos')),
        catchError(this.handleError('getVecinos', []))
      );
  }

  
  getAllVecino(): Observable<Vecino[]> {

    return this.http.get<Vecino[]>(this.VecinoUrl)
      .pipe(
        tap(heroes => this.log('fetched Frecuencia')),
        catchError(this.handleError('getFrecuencia', []))
      );
  }



  getVecino(id: number): Observable<Vecino> {
    const url = `${this.VecinoUrl}/${id}`;

    return this.http.get<Vecino>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Vecino>(`getVecino id=${id}`))
    );
  }



  getVecinoEmail(email: string): Observable<Vecino> {
    const url = `${this.VecinoEmailUrl}/${email}`;

    return this.http.get<Vecino>(url).pipe(
      tap(_ => this.log(`fetched hero email=${email}`)),
      catchError(this.handleError<Vecino>(`getVecino email=${email}`))
    );
  }


  addVecino (vecino: Vecino): Observable<any> {
    return this.http.post<Vecino>(this.VecinoUrl, vecino, httpOptions).pipe(
      tap((vecino: Vecino) => this.log(`added Vecino w/ id=${vecino.IdVecino}`)),
      catchError(this.handleError<Vecino>('addVecino'))
    );
  }


  

  private handleError<T> (operation = 'operation', result?: T) {
    
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }

  private log(message: string) {
    console.log('VecinosService: ' + message);
  }
}





