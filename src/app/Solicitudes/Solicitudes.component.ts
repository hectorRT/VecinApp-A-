import { SolicitudService } from './../../Servicios/Solicitudes-Service/solicitudes.service';

import { Component, OnInit } from '@angular/core';
import {Solicitud} from '../../Clases/Solicitudes';

@Component({
  selector: 'app-Solicitudes',
  templateUrl: './Solicitudes.component.html',
  styleUrls: ['./Solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  solicitud:Solicitud;
  //arreglos
  SolicitudArray: Array<Solicitud>=[];
  SolicitudFilter: Array<Solicitud>=[];
  tema:string='';


  constructor(private SolicitudServicio: SolicitudService) { }

  ngOnInit() {

    this.solicitud= new Solicitud();
    this.buscarSolicitud();
  }


 /* getVecinos()
  {
    this.vecinoServicio.getVecinos().subscribe(res=>{
      console.log(res);
    });
  }
*/


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
