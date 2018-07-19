import { Injectable } from '@angular/core';

import { catchError, tap } from "rxjs/operators";

import { Observable } from "rxjs/observable";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import {of} from "rxjs/observable/of";

import { Suplidor } from "../../Clases/Suplidor";

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class SuplidorService {

  private SuplidorUrl="http://localhost:3000/Suplidor";
  constructor(private http:  HttpClient) { }

  getSuplidores(): Observable<Suplidor[]> {

    return this.http.get<Suplidor[]>(this.SuplidorUrl)
      .pipe(
        tap(heroes => this.log('fetched Suplidores')),
        catchError(this.handleError('getSuplidores', []))
      );
  }

  getSuplidor(id: number): Observable<Suplidor> {
    const url = `${this.SuplidorUrl}/${id}`;

    return this.http.get<Suplidor>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Suplidor>(`getSuplidor id=${id}`))
    );
  }

  addSuplidor (suplidor: Suplidor): Observable<any> {
    return this.http.post<Suplidor>(this.SuplidorUrl, suplidor, httpOptions).pipe(
      tap((suplidor: Suplidor) => this.log(`added Suplidor w/ id=${suplidor.IdSuplidor}`)),
      catchError(this.handleError<Suplidor>('addSuplidor'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }

  private log(message: string) {
    console.log('SuplidorService: ' + message);
  }

}
