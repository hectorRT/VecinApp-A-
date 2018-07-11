
import { Component, OnInit } from '@angular/core';
import {Solicitud} from '../../Clases/Solicitudes';
import {SolicitudService} from '../../Servicios/Solicitudes-Service/solicitudes.service';

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
   this.buscarSolicitudes();
  }


 /* getVecinos()
  {
    this.vecinoServicio.getVecinos().subscribe(res=>{
      console.log(res);
    });
  }
*/


  addSolicitudes(data) {

    this.solicitud.Fecha = data.value.fechaInput;
    this.solicitud.Tema = data.value.temaInput;
    this.solicitud.Descripcion = data.value.descripcionInput;

    this.SolicitudServicio.addSolicitudes(this.solicitud).subscribe(res => {
      console.log(res);
      this.solicitud.IdSolicitudes = res.data.insertId;
    });

    alert("Registrado");
    this.limpiar(data);

  }


  /*getVecino(id:number) {
   var data;
   this.vecinoServicio.getVecino(1).subscribe(res => {
      console.log(res.Nombres);
      
    });    
    
  }*/

  buscarSolicitud()
  {
    this.SolicitudServicio.getSolicitudes().subscribe(vecino=>{
      this.SolicitudArray=vecino;
      this.SolicitudFilter=this.SolicitudArray;
    });
  }

  filtrar()
  {
    this.SolicitudFilter = this.SolicitudArray.filter((veci:Solicitud)=>veci.Tema.includes(this.tema));
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
