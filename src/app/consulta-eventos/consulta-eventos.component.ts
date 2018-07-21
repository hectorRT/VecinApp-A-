import { Component, OnInit } from '@angular/core';
import { Evento } from '../../Clases/Evento';
import { EventoService } from '../../Servicios/Evento/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-eventos',
  templateUrl: './consulta-eventos.component.html',
  styleUrls: ['./consulta-eventos.component.css']
})
export class ConsultaEventosComponent implements OnInit {
  eventos: Array<Evento> = [];

  constructor(private router: Router, public eventoService: EventoService) { }

  ngOnInit() {
    this.cargarEventos();
  }

  cargarEventos() {
    this.eventoService.getEventos(3).subscribe(eventos => {
      this.eventos = eventos;
      // console.log(eventos);
    });
  }

  onItemClick(evento: Evento) {
    this.router.navigate([`/evento/${evento.IdEvento}`]);
  }

  onCreate() {
    this.router.navigate([`/evento`]);
  }

}
