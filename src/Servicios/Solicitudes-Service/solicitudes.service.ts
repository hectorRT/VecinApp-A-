import { Injectable } from '@angular/core';
import { catchError, tap } from "rxjs/operators";

import { Observable } from "rxjs/observable";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import {of} from "rxjs/observable/of";

import { Solicitud } from "../../Clases/Solicitudes";

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable()
export class SolicitudService {

  private SolicitudesUrl="http://localhost:3000/solicitudes";
  constructor(private http:  HttpClient) { }

  getSolicitudes(): Observable<Solicitud[]> {

    return this.http.get<Solicitud[]>(this.SolicitudesUrl)
      .pipe(
        tap(heroes => this.log('fetched Solicitudes')),
        catchError(this.handleError('getSolicitudes', []))
      );
  }


  getSolicitude(id: number): Observable<Solicitud> {
    const url = `${this.SolicitudesUrl}/${id}`;

    return this.http.get<Solicitud>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Solicitud>(`getSolicitudes id=${id}`))
    );
  }

  addSolicitudes (solicitud: Solicitud): Observable<any> {
    return this.http.post<Solicitud>(this.SolicitudesUrl, solicitud, httpOptions).pipe(
      tap((solicitud: Solicitud) => this.log(`added Solicitudes w/ id=${solicitud.IdSolicitudes}`)),
      catchError(this.handleError<Solicitud>('addSolicitudes'))
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





