import { Injectable } from '@angular/core';
import { catchError, tap } from "rxjs/operators";

import { Observable } from "rxjs/observable";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import {of} from "rxjs/observable/of";

import { GastoModel } from "../../Clases/Gasto";

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable()
export class gastoService {

  private gastoUrl="http://localhost:3000/gasto";
  constructor(private http:  HttpClient) { }

  getGastos(): Observable<GastoModel[]> {

    return this.http.get<GastoModel[]>(this.gastoUrl)
      .pipe(
        tap(heroes => this.log('fetched Gastos')),
        catchError(this.handleError('getGastos', []))
      );
  }

  


  addGastos (gasto: GastoModel): Observable<any> {
    return this.http.post<GastoModel>(this.gastoUrl, gasto, httpOptions).pipe(
      tap((gasto: GastoModel) => this.log(`added Gastos w/ id=${gasto.IdGasto}`)),
      catchError(this.handleError<GastoModel>('addGasto'))
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





