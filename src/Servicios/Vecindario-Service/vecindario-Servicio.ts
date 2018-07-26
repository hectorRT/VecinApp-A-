import { Injectable } from '@angular/core';
import { catchError, tap } from "rxjs/operators";

import { Observable } from "rxjs/observable";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import {of} from "rxjs/observable/of";

import { VecindarioModel } from '../../Clases/Vecindario';

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable()
export class VecindarioService {

  private VecindarioUrl="http://localhost:3000/vecindario";
 
  constructor(private http:  HttpClient) { }

  getVecindarios(): Observable<VecindarioModel[]> {

    return this.http.get<VecindarioModel[]>(this.VecindarioUrl)
      .pipe(
        tap(heroes => this.log('fetched Vecindario')),
        catchError(this.handleError('getVecindario', []))
      );
  }

  getVecindario(id: number): Observable<VecindarioModel> {
    const url = `${this.VecindarioUrl}/${id}`;

    return this.http.get<VecindarioModel>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<VecindarioModel>(`getVecindario id=${id}`))
    );
  }



  addVecindario (vecindario: VecindarioModel): Observable<any> {
    return this.http.post<VecindarioModel>(this.VecindarioUrl, vecindario, httpOptions).pipe(
      tap((vecindario: VecindarioModel) => this.log(`added Vecindario w/ id=${vecindario.IdVecindario}`)),
      catchError(this.handleError<VecindarioModel>('addVecindario'))
    );
  }


  

  private handleError<T> (operation = 'operation', result?: T) {
    
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }

  private log(message: string) {
    console.log('VecindarioService: ' + message);
  }
}





