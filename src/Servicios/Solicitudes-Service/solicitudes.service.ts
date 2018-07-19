import { Injectable } from '@angular/core';

import { Observable } from "rxjs/observable";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Solicitud } from "../../Clases/Solicitudes";

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable()
export class SolicitudService {

  private SolicitudesUrl="http://localhost:3000/solicitudes";
  constructor(private http:  HttpClient) { }

  getSolicitudes(): Observable<Solicitud[]> {

    return this.http.get<Solicitud[]>(this.SolicitudesUrl)
      .pipe(
      );
  }
  getSolicitude(id: number): Observable<Solicitud> {
    const url = `${this.SolicitudesUrl}/${id}`;

    return this.http.get<Solicitud>(url).pipe(
    );
  }

  getEliminar(id: number): Observable<Solicitud> {
    const url = `${this.SolicitudesUrl}/${id}`;

    return this.http.delete<Solicitud>(url).pipe(
    );
  }
  addSolicitudes (solicitud: Solicitud): Observable<any> {
    return this.http.post<Solicitud>(this.SolicitudesUrl, solicitud, httpOptions).pipe(
    );
  }

}





