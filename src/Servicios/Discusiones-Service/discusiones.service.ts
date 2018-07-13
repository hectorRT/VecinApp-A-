import { catchError, tap } from "rxjs/operators";

import { Observable } from "rxjs/observable";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from "@angular/core";

import {of} from 'rxjs/observable/of';

import { Discusion } from "../../Clases/Discusion";
import { EstadoDiscusion } from "../../Clases/EstadoDiscusion";

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class DiscusionesService{

    private discusionesUrl = 'http://localhost:3000/discusiones';
    estadosDiscusionesURL = 'http://localhost:3000/estados-discusiones';

    constructor(private http: HttpClient){}

    getEstados(): Observable<EstadoDiscusion[]> {

      return this.http.get<EstadoDiscusion[]>(this.estadosDiscusionesURL)
        .pipe(
          tap(estados => this.log('fetched estados discusiones')),
          catchError(this.handleError('getEstados', []))
        );
        
    }

    getDiscusiones(): Observable<Discusion[]> {

      return this.http.get<Discusion[]>(this.discusionesUrl)
        .pipe(
          tap(heroes => this.log(`fetched Discusiones`)),
          catchError(this.handleError('getDiscusiones', []))
      );
    }
    
      getDiscusion(id: number): Observable<Discusion> {

        const url = `${this.discusionesUrl}/${id}`;
        return this.http.get<Discusion>(url).pipe(
          tap(_ => this.log(`fetched discusion id=${id}`)),
          catchError(this.handleError<Discusion>(`getDiscusion id=${id}`))
        );

      }
    
      addDiscusion (discusion: Discusion): Observable<any> {

        return this.http.post<any>(this.discusionesUrl, discusion, httpOptions).pipe(
          tap((discusion: any) => this.log(`added Discusion w/ id=${discusion.data.insertId}`)),
          catchError(this.handleError<Discusion>('addDiscusion'))
        );

      }
    
      deleteDiscusion (id: string): Observable<null> {

        const url = `${this.discusionesUrl}/${id}`;
    
        return this.http.delete<null>(url, httpOptions).pipe(
          tap(_ => this.log(`deleted discusion id=${id}`)),
          catchError(this.handleError<null>('deleteDiscusion'))
        );

      }
    
      updateDiscusion (discusion: Discusion): Observable<null> {

        const url =  `${this.discusionesUrl}/${discusion.IdDiscusion}`;
        return this.http.put(url, discusion, httpOptions).pipe(
          tap(_ => this.log(`updated discusion id=${discusion.IdDiscusion}`)),
          catchError(this.handleError<any>('updateDiscusion'))
        );

      }
    
      private handleError<T> (operation = 'operation', result?: T) {
    
        return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
        };
    
      }
    
      private log(message: string) {
        console.log('DiscusionesService: ' + message);
      }
}