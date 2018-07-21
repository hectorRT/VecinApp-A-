import { Component, OnInit } from '@angular/core';
import { TiposAportes} from '../../Clases/TipoAporte';
import {TipoAporteService} from '../../Servicios/TipoAporte-Service/TipoAporte.service';
@Component({
  selector: 'app-tipos-aportes',
  templateUrl: './tipos-aportes.component.html',
  styleUrls: ['./tipos-aportes.component.css']
})
export class TiposAportesComponent implements OnInit {


  tipo:TiposAportes;
  //arreglos
  AporteArray: Array<TiposAportes>=[];

  AporteFilter: Array<TiposAportes>=[];
  tema:string='';



  constructor(private AporteServicio: TipoAporteService) { }

  ngOnInit() {

    this.tipo= new TiposAportes();

  
  }


  addAportes(data) {

    // this.aporte.FechaCreacion = data.value.fechainput;
    // this.aporte.IdVecino = data.value.idVecinoinput;
    // this.aporte.Nombre = data.value.nombreinput;
    // this.aporte.Nota = data.value.notatextarea;

    console.log(JSON.stringify(this.tipo));

    this.AporteServicio.addTipo(this.tipo).subscribe(res=>{
      console.log(res);
  
    });
  
 
    alert("Registrado");
    this.limpiar(data);

  }

 


 
 
  buscarAporte()
  {
    this.AporteServicio.gettipos().subscribe(aporte=>{
      this.AporteArray=aporte;
      this.AporteFilter=this.AporteArray;

    });
  }

  

  filtrar()
  {
    this.AporteFilter = this.AporteArray.filter((veci:TiposAportes)=>veci.Nombre.includes(this.tema));
    console.log(this.AporteFilter);

  }

  limpiar(data)
  {
    data.value.IdTipoAporte='';'';
    data.value.Nombre='';
  
    window.location.reload();

  }

}