import { catchError, tap } from "rxjs/operators";

import { Observable } from "rxjs/observable";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from "@angular/core";

import {of} from 'rxjs/Observable/of';

import { Comentario } from "../../Clases/Comentario";

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class ComentariosService{

    private comentariosUrl = 'http://localhost:3000/discusionesComentarios';

    constructor(private http: HttpClient){}

    getComentarios(): Observable<Comentario[]> {

        return this.http.get<Comentario[]>(this.comentariosUrl)
          .pipe(
            tap(heroes => this.log(`fetched Comentarios`)),
            catchError(this.handleError('getComentarios', []))
          );
      }
    
      getComentariosDiscusion(IdDiscusion: number): Observable<Comentario[]> {
        const url = `${this.comentariosUrl}/${IdDiscusion}`;

        return this.http.get<Comentario[]>(url).pipe(
          tap( res => this.log(`fetched Comentarios For IdDiscusion=${IdDiscusion}`)),
          catchError(this.handleError('getComentariosDiscusion', []))
        )
      }

      getComentario(id: number): Observable<Comentario> {
        const url = `${this.comentariosUrl}/${id}`;
        return this.http.get<Comentario>(url).pipe(
          tap(_ => this.log(`fetched Comentario id=${id}`)),
          catchError(this.handleError<Comentario>(`getComentario id=${id}`))
        );
      }
    
      addComentario (comentario: Comentario): Observable<Comentario> {
        return this.http.post<Comentario>(this.comentariosUrl, comentario, httpOptions).pipe(
          tap((comentario: Comentario) => this.log(`added Comentario w/ id=${comentario.IdComentario}`)),
          catchError(this.handleError<Comentario>('addComentario'))
        );
      }
    
      deleteComentario (id: string): Observable<null> {
        const url = `${this.comentariosUrl}/${id}`;
    
        return this.http.delete<null>(url, httpOptions).pipe(
          tap(_ => this.log(`deleted Comentario id=${id}`)),
          catchError(this.handleError<null>('deleteComentario'))
        );
      }
    
      updateComentario (discusion: Comentario): Observable<null> {
        return this.http.put(this.comentariosUrl, discusion, httpOptions).pipe(
          tap(_ => this.log(`updated Comentario id=${discusion.IdDiscusion}`)),
          catchError(this.handleError<any>('updateComentario'))
        );
      }
    
      private handleError<T> (operation = 'operation', result?: T) {
    
        return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
        };
      }
    
      private log(message: string) {
        console.log('ComentariosService: ' + message);
      }
}