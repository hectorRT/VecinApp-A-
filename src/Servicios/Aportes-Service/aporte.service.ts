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
      tap(() => this.log(`fetched Aportes`)), catchError(this.handleError<Aportes[]>(`Error`))
    );
  }


  getAporte(id: number): Observable<Aportes> {
    const url = `${this.AportesUrl}/${id}`;

    return this.http.get<Aportes>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Aportes>(`getAportes id=${id}`))
    );
  }

  getEliminar(id: number): Observable<Aportes> {
    const url = `${this.AportesUrl}/${id}`;

    return this.http.delete<Aportes>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Aportes>(`DeleteAportes id=${id}`))
    );
  }

  addAportes (aporte: Aportes): Observable<any> {
    return this.http.post<any>(this.AportesUrl, aporte, httpOptions).pipe(
      tap((res: any) => this.log(`added aportes w/ id=${res.data.insertId}`)),
      catchError(this.handleError<Aportes>('addaportes'))
    );
  }
  

  private handleError<T> (operation = 'operation', result?: T) {
    
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }

  private log(message: string) {
    console.log('AportesService: ' + message);
  }
}





