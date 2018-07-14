import { Component, OnInit } from '@angular/core';
import {Aportes} from '../../Clases/Aportes';
import { Aporteservice } from './../../Servicios/Aportes-Service/aporte.service';

@Component({
  selector: 'app-registro-aportes',
  templateUrl: './registro-aportes.component.html',
  styleUrls: ['./registro-aportes.component.css']
})
export class RegistroAportesComponent implements OnInit {


  aporte:Aportes;
  //arreglos
  AporteArray: Array<Aportes>=[];
  AporteFilter: Array<Aportes>=[];
  tema:string='';


  constructor(private AporteServicio: Aporteservice) { }

  ngOnInit() {

    this.aporte= new Aportes();
    this.buscarAporte();
  }



  addAportes(data) {

    this.aporte.FechaCreacion = data.value.fechainput;
    this.aporte.IdVecino = data.value.idVecinoinput;
    this.aporte.Nombre = data.value.nombreinput;
    this.aporte.Nota = data.value.notatextarea;
  
 
    alert("Registrado");
    this.limpiar(data);

  }

  getVecino(id:number) {
   var data;
   this.AporteServicio.getAporte(id).subscribe(res => {
      console.log(res);
      
    });    
    
  }
  Eliminar(id:number) {
    this.AporteServicio.getEliminar(id).subscribe(res => {
       console.log(res);
     });    
     
   }
  buscarAporte()
  {
    this.AporteServicio.getAportes().subscribe(aporte=>{
      this.AporteArray=aporte;
      this.AporteFilter=this.AporteArray;

    });
  }

  filtrar()
  {
    this.AporteFilter = this.AporteArray.filter((veci:Aportes)=>veci.Nombre.includes(this.tema));
    console.log(this.AporteFilter);

  }

  limpiar(data)
  {
    data.value.IdVecino='';'';
    data.value.FechaCreacion='';
    data.value.Nombre='';
    data.value.Nota='';
    window.location.reload();

  }

}
