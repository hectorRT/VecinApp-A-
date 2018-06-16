import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Solicitudes',
  templateUrl: './Solicitudes.component.html',
  styleUrls: ['./Solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  solicitud = [];
  constructor() { }

  ngOnInit() {
  }
  GuardarSolicitud(Registro){
    
    this.solicitud = JSON.parse(localStorage.getItem("Solicitud"));
    if (this.solicitud == undefined) this.solicitud = [];
    var solicitud = { Id: this.solicitud.length + 1, Fecha: Registro.value.Fecha, Tema: Registro.value.Tema, Descripcion: Registro.value.Descripcion }
    this.solicitud.push(solicitud);

    localStorage.setItem("Solicitud", JSON.stringify(this.solicitud));
    console.log(Registro.value);

    Registro.reset();

    
}
}
