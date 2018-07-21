import { Cuotas } from './../../Clases/Cuota';

import { Injectable } from '@angular/core';

import { catchError, tap } from "rxjs/operators";

import { Observable } from "rxjs/observable";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import {of} from "rxjs/observable/of";



const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class CuotaService {

  private CuotaUrl = "http://localhost:3000/Cuota";
  constructor(private http:  HttpClient) { }

  getCuotas(): Observable<Cuotas[]> {

    return this.http.get<Cuotas[]>(this.CuotaUrl)
      .pipe(
        tap(heroes => this.log('fetched Cuota')),
        catchError(this.handleError('getCuota', []))
      );
  }

  getCuota(id: number): Observable<Cuotas> {
    const url = `${this.CuotaUrl}/${id}`;

    return this.http.get<Cuotas>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Cuotas>(`getCuota id=${id}`))
    );
  }

  addCuotas (cuota: Cuotas): Observable<any> {
    return this.http.post<Cuotas>(this.CuotaUrl, cuota, httpOptions).pipe(
      tap((Cuota: Cuotas) => this.log(`added Cuotas w/ id=${cuota.IdCuota}`)),
      catchError(this.handleError<Cuotas>('addCuotas'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }

  private log(message: string) {
    console.log('CoutaService: ' + message);
  }

}
