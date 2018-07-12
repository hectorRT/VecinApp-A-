import { Injectable } from '@angular/core';
import { catchError, tap } from "rxjs/operators";

import { Observable } from "rxjs/observable";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import {of} from "rxjs/observable/of";

import { Frecuencia } from "../../Clases/FrecuenciaPago";

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class FrecuenciaPagoService {

  
  private CargoUrl="http://localhost:3000/Frecuencia";
  constructor(private http:  HttpClient) { }

  getFrecuencia(): Observable<Frecuencia[]> {

    return this.http.get<Frecuencia[]>(this.CargoUrl)
      .pipe(
        tap(heroes => this.log('fetched Frecuencia')),
        catchError(this.handleError('getFrecuencia', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }

  private log(message: string) {
    console.log('CargoService: ' + message);
  }

}
