import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/observable';

import { tap, catchError } from 'rxjs/operators';

import { of } from 'rxjs/observable/of';

import { Evento } from '../../Clases/Evento';

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  rutaEventosURL = 'http://localhost:3000/eventos';

  constructor(public httpClient: HttpClient) { }

  getEvento(id: number): Observable<Evento[]> {
    
    const url = `${this.rutaEventosURL}/${id}`;
    return this.httpClient.get<Evento[]>(url)
        .pipe(
          tap(evento => this.log(`fetched evento id=${id}`)),
          catchError(this.handleError(`getDiscusion id=${id}`, []))
        );
  }

  getEventos(idVecindario: number): Observable<Evento[]> {

    const url = `${this.rutaEventosURL}/vecindario/${idVecindario}`;
    return this.httpClient.get<Evento[]>(url)
        .pipe(
          tap(eventos => this.log(`fetched eventos de vecindario`)),
          catchError(this.handleError('getDiscusiones', []))
        );
  }

  addEvento(evento: Evento): Observable<any> {

    return this.httpClient.post<any>(this.rutaEventosURL, evento, httpOptions)
      .pipe(
        tap((evento: any) => this.log(`evento added w/ id=${evento.data.insertId}`)),
        catchError(this.handleError<Evento>('addEvento'))
      );
  }

  updateEvento(evento: Evento): Observable<null> {
    
    const url = `${this.rutaEventosURL}/${evento.IdEvento}`;

    return this.httpClient.put(url, evento, httpOptions)
      .pipe(
        tap(updated => this.log(`evento updated id=${evento.IdEvento}`)),
        catchError(this.handleError<any>(`updateEvento`))
      );
  }

  deleteEvento(id: number): Observable<null> {

    const url= `${this.rutaEventosURL}/${id}`;

    return this.httpClient.delete<null>(url, httpOptions)
      .pipe(
        tap(deleted => this.log(`evento deleted id=${id}`)),
        catchError(this.handleError<null>('deleteEvento'))
      );
  }
  
  
  private handleError<T> (operation = 'operation', result?: T) {
    
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }

  private log(message: string) {
    console.log('EventosService: ' + message);
  }
}
