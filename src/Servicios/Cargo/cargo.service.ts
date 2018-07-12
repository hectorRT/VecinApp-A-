import { Injectable } from '@angular/core';
import { catchError, tap } from "rxjs/operators";

import { Observable } from "rxjs/observable";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import {of} from "rxjs/observable/of";

import { Cargo } from "../../Clases/Cargo";

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private CargoUrl="http://localhost:3000/Cargos";
  constructor(private http:  HttpClient) { }

  getCargos(): Observable<Cargo[]> {

    return this.http.get<Cargo[]>(this.CargoUrl)
      .pipe(
        tap(heroes => this.log('fetched cargo')),
        catchError(this.handleError('getCargo', []))
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
