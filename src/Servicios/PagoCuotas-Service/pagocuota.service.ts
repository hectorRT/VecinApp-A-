import { PagoCuota } from './../../Clases/PagoCuota';

import { Injectable } from '@angular/core';

import { catchError, tap } from "rxjs/operators";

import { Observable } from "rxjs/observable";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import {of} from "rxjs/observable/of";



const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class PagoCuotaService {

  private PagoCuotaUrl = "http://localhost:3000/pagocuota";
  constructor(private http:  HttpClient) { }

  getPagoCuotas(): Observable<PagoCuota[]> {

    return this.http.get<PagoCuota[]>(this.PagoCuotaUrl)
      .pipe(
        tap(heroes => this.log('fetched Pagocuota')),
        catchError(this.handleError('getPagocuota', []))
      );
  }

  getPagoCuota(id: number): Observable<PagoCuota> {
    const url = `${this.PagoCuotaUrl}/${id}`;

    return this.http.get<PagoCuota>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<PagoCuota>(`getPagocuota id=${id}`))
    );
  }

  addPagoCuotas (pago: PagoCuota): Observable<any> {
    return this.http.post<PagoCuota>(this.PagoCuotaUrl, pago, httpOptions).pipe(
      tap((Pago: PagoCuota) => this.log(`added Pagocuota w/ id=${pago.IdPago}`)),
      catchError(this.handleError<PagoCuota>('addCuotas'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }

  private log(message: string) {
    console.log('PagoCuotaService: ' + message);
  }

}
