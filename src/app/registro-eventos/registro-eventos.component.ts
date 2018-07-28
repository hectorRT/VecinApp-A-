import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Evento } from '../../Clases/Evento';

import { EventoService } from '../../Servicios/Evento/evento.service';
import { AuthenticationService } from './../_services/authentication.service';

@Component({
  selector: 'app-registro-eventos',
  templateUrl: './registro-eventos.component.html',
  styleUrls: ['./registro-eventos.component.css']
})
export class RegistroEventosComponent implements OnInit {

  evento: Evento = {}
  idVecindario: number = 0;
  timeInputType = "datetime-local";

  constructor(public eventoService: EventoService, private _route: ActivatedRoute, private auth: AuthenticationService) { }

  getCurrentUser() {
    if (localStorage.getItem('token')) {
      this.auth.ObtenerDatos(localStorage.getItem('token')).subscribe(resultado => {
          this.idVecindario = resultado[0].IdVecindario;
          console.log("IdVecindario: " + this.idVecindario);
      })
    } else {
        this.auth.authenticated = false;
        localStorage.removeItem('token');
    }
  }
  
  ngOnInit() {
    this.getCurrentUser();
    this.cargarPosibleEvento();
  }

  cargarPosibleEvento() {
    let id: number = +this._route.snapshot.paramMap.get('id');
    console.log('id: ' + id);
    if (id > 0) {
      this.eventoService.getEvento(id).subscribe(evento => {
        this.evento = evento[0];
        this.timeInputType = "datetime";
        console.log(this.evento);
      });
    }
  }

  limpiar() {
    this.evento = {};
    this.timeInputType = "datetime-local";
  }

  onSave() {

    console.log(this.evento);
    if (this.evento.IdEvento == 0 || this.evento.IdEvento == undefined) {
      this.create();
    } else {
      this.update();
    }
  }
  
  create(){
    
    // asignar el IdVecindario correspondiente cuando login esté listo
    this.evento.IdVecindario = this.idVecindario;

    this.eventoService.addEvento(this.evento).subscribe(res =>
      {
        console.log(res);
        this.evento.IdEvento = res.data.insertId;
      }
    );
  }
  

  update() {
    
    this.eventoService.updateEvento(this.evento).subscribe(res => {
      console.log(res);
      
    });
  }

  onDelete() {
    this.eventoService.deleteEvento(this.evento.IdEvento).subscribe(res => {
      console.log(res);
      this.limpiar();
    });
  }

}
