import { Component, OnInit } from '@angular/core';
import { Evento } from '../../Clases/Evento';
import { EventoService } from '../../Servicios/Evento/evento.service';
import { Router } from '@angular/router';
import { AuthenticationService } from './../_services/authentication.service';

@Component({
  selector: 'app-consulta-eventos',
  templateUrl: './consulta-eventos.component.html',
  styleUrls: ['./consulta-eventos.component.css']
})
export class ConsultaEventosComponent implements OnInit {
  eventos: Array<Evento> = [];
  idVecindario: number = 0;
  idCargo = "";

  constructor(private router: Router, public eventoService: EventoService, private auth: AuthenticationService) {
    
  }

  getCurrentUser() {
    if (localStorage.getItem('token')) {
      this.auth.ObtenerDatos(localStorage.getItem('token')).subscribe(resultado => {
          this.idVecindario = resultado[0].IdVecindario;
          this.idCargo = resultado[0].IdCargo;
          console.log("IdVecindario: " + this.idVecindario + " - IdCargo: " + this.idCargo);
          this.cargarEventos();
      })
    } else {
        this.auth.authenticated = false;
        localStorage.removeItem('token');
    }
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  cargarEventos() {
    this.eventoService.getEventos(this.idVecindario).subscribe(eventos => {
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
