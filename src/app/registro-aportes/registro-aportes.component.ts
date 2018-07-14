import { Component, OnInit } from '@angular/core';
import {Aportes} from '../../Clases/Aportes';
import { Aporteservice } from './../../Servicios/Aportes-Service/aporte.service';
import { VecinoService } from './../../Servicios/Vecino-Service/vecino.service';
import {Vecino} from '../../Clases/Vecino';
import {Route} from '@angular/router';


@Component({
  selector: 'app-registro-aportes',
  templateUrl: './registro-aportes.component.html',
  styleUrls: ['./registro-aportes.component.css']
})
export class RegistroAportesComponent implements OnInit {

  vecino:Vecino;
  aporte:Aportes;
  //arreglos
  AporteArray: Array<Aportes>=[];
  VecinoArray: Array<Vecino>=[];
  VecinosArray: Array<Vecino>=[];
  AporteFilter: Array<Aportes>=[];
  tema:string='';


  constructor(private AporteServicio: Aporteservice,private Vecinoservice: VecinoService) { }

  ngOnInit() {

    this.aporte= new Aportes();
    this.getVecinos();
    this.vecino= new Vecino();
  
  }


  addAportes(data) {

    // this.aporte.FechaCreacion = data.value.fechainput;
    // this.aporte.IdVecino = data.value.idVecinoinput;
    // this.aporte.Nombre = data.value.nombreinput;
    // this.aporte.Nota = data.value.notatextarea;

    console.log(JSON.stringify(this.aporte));

    this.AporteServicio.addAportes(this.aporte).subscribe(res=>{
      console.log(res);
  
    });
  
 
    alert("Registrado");
    this.limpiar(data);

  }

 
  getVecino(id:number) {
   var data;
   this.Vecinoservice.getVecino(id).subscribe(res => {
      console.log(res);
      
    });    
    
  }

  getVecinos()
  {
    this.Vecinoservice.getAllVecino().subscribe(res=>{
      console.log(res);
      this.VecinoArray=res;
       this.VecinosArray=this.VecinoArray;
       console.log(this.VecinosArray);
    })
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
