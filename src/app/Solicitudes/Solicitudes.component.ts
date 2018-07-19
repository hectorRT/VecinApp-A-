import { SolicitudService } from './../../Servicios/Solicitudes-Service/solicitudes.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Solicitud} from '../../Clases/Solicitudes';

@Component({
  selector: 'app-Solicitudes',
  templateUrl: './Solicitudes.component.html',
  styleUrls: ['./Solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  
  isLoggedIn$: Observable<boolean>;

  constructor(private SolicitudServicio: SolicitudService) { 
    // this.isLoggedIn$ = this.authService.isLoggedIn;
  }
  ngOnInit() {
    // this.isLoggedIn$ = this.authService.isLoggedIn;
    this.solicitud= new Solicitud();
    this.buscarSolicitud();
  }
  //#region 
  solicitud:Solicitud;
  SolicitudArray: Array<Solicitud>=[];
  SolicitudFilter: Array<Solicitud>=[];
  tema:string='';
  
  addSolicitudes(data) {

    this.solicitud.fecha = data.value.fechaInput;
    this.solicitud.tema = data.value.temaInput;
    this.solicitud.descripcion = data.value.descripcionInput;

    this.SolicitudServicio.addSolicitudes(this.solicitud).subscribe(res => {
      console.log(res);
    });

    alert("Registrado");
    this.limpiar(data);

  }
  getVecino(id:number) {
   var data;
   this.SolicitudServicio.getSolicitude(id).subscribe(res => {
      console.log(res);
      
    });    
    
  }
  Eliminar(id:number) {
    this.SolicitudServicio.getEliminar(id).subscribe(res => {
       console.log(res);
     });    
     
   }
  buscarSolicitud()
  {
    this.SolicitudServicio.getSolicitudes().subscribe(vecino=>{
      this.SolicitudArray=vecino;
      this.SolicitudFilter=this.SolicitudArray;

    });
  }
  filtrar()
  {
    this.SolicitudFilter = this.SolicitudArray.filter((veci:Solicitud)=>veci.tema.includes(this.tema));
    console.log(this.SolicitudFilter);

  }
  limpiar(data)
  {
    data.value.id='';'';
    data.value.fecha='';
    data.value.tema='';
    data.value.descripcion='';
    window.location.reload();

  }
}
