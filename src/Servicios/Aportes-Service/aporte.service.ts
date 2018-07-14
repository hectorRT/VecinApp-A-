import { Injectable } from '@angular/core';
import { catchError, tap } from "rxjs/operators";

import { Observable } from "rxjs/observable";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import {of} from "rxjs/observable/of";

import { Aportes } from "../../Clases/Aportes";

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable()
export class Aporteservice {

  private AportesUrl="http://localhost:3000/aportes";
  constructor(private http:  HttpClient) { }

  getAportes(): Observable<Aportes[]> {

    return this.http.get<Aportes[]>(this.AportesUrl)
      .pipe(
        tap(heroes => this.log('fetched Solicitudes')),
        catchError(this.handleError('getSolicitudes', []))
      );
  }


  getAporte(id: number): Observable<Aportes> {
    const url = `${this.AportesUrl}/${id}`;

    return this.http.get<Aportes>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Aportes>(`getSolicitudes id=${id}`))
    );
  }

  getEliminar(id: number): Observable<Aportes> {
    const url = `${this.AportesUrl}/${id}`;

    return this.http.delete<Aportes>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Aportes>(`DeleteSolicitudes id=${id}`))
    );
  }
  addAportes (aporte: Aportes): Observable<any> {
    return this.http.post<Aportes>(this.AportesUrl, aporte, httpOptions).pipe(
      tap((aporte: Aportes) => this.log(`added Solicitudes w/ id=${aporte.IdAporte}`)),
      catchError(this.handleError<Aportes>('addAportes'))
    );
  }


  

  private handleError<T> (operation = 'operation', result?: T) {
    
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }

  private log(message: string) {
    console.log('SolicitudesService: ' + message);
  }
}





