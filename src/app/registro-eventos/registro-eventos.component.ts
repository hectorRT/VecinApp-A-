import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Evento } from '../../Clases/Evento';

import { EventoService } from '../../Servicios/Evento/evento.service';

@Component({
  selector: 'app-registro-eventos',
  templateUrl: './registro-eventos.component.html',
  styleUrls: ['./registro-eventos.component.css']
})
export class RegistroEventosComponent implements OnInit {

  evento: Evento = {}

  constructor(public eventoService: EventoService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.cargarPosibleEvento();
  }

  cargarPosibleEvento() {
    let id: number = +this._route.snapshot.paramMap.get('id');
    console.log('id: ' + id);
    if (id > 0) {
      this.eventoService.getEvento(id).subscribe(evento => {
        this.evento = evento[0];
        console.log(this.evento);
      });
    }
  }

  limpiar() {
    this.evento = {};

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
    this.evento.IdVecindario = 3;

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
