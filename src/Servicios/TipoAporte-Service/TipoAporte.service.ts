import { Injectable } from '@angular/core';
import { catchError, tap } from "rxjs/operators";

import { Observable } from "rxjs/observable";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import {of} from "rxjs/observable/of";

import { TiposAportes } from "../../Clases/TipoAporte";

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable()
export class TipoAporteService {

  private tipoUrl="http://localhost:3000/tipoaportes";
 
  constructor(private http:  HttpClient) { }

  gettipos(): Observable<TiposAportes[]> {

    return this.http.get<TiposAportes[]>(this.tipoUrl)
      .pipe(
        tap(heroes => this.log('fetched tipos')),
        catchError(this.handleError('gettipos', []))
      );
  }



  getTipo(id: number): Observable<TiposAportes> {
    const url = `${this.tipoUrl}/${id}`;

    return this.http.get<TiposAportes>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<TiposAportes>(`getTipo id=${id}`))
    );
  }


  getAlltipo(): Observable<TiposAportes[]> {

    return this.http.get<TiposAportes[]>(this.tipoUrl)
      .pipe(
        tap(heroes => this.log('fetched Frecuencia')),
        catchError(this.handleError('getFrecuencia', []))
      );
  }



  addTipo (tipo: TiposAportes): Observable<any> {
    return this.http.post<TiposAportes>(this.tipoUrl, tipo, httpOptions).pipe(
      tap((tipoaparte: TiposAportes) => this.log(`added Tipo w/ id=${tipo.IdTipoAporte}`)),
      catchError(this.handleError<TiposAportes>('addtipo'))
    );
  }


  

  private handleError<T> (operation = 'operation', result?: T) {
    
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }

  private log(message: string) {
    console.log('TipoService: ' + message);
  }
}





