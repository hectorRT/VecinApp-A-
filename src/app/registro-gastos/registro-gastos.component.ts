import { Component, OnInit } from '@angular/core';
import { GastoModel } from '../../Clases/Gasto';
import { Vecino } from '../../Clases/Vecino';
import { Suplidor } from '../../Clases/Suplidor';
import { VecindarioService } from '../../Servicios/Vecindario-Service/vecindario-Servicio';
import { SuplidorService } from '../../Servicios/Suplidor-Service/Suplidor.service';
import { gastoService } from '../../Servicios/Gasto/GastoService';
import { VecinoService } from '../../Servicios/Vecino-Service/vecino.service';

@Component({
  selector: 'app-registro-gastos',
  templateUrl: './registro-gastos.component.html',
  styleUrls: ['./registro-gastos.component.css']
})
export class RegistroGastosComponent implements OnInit {

  gasto:GastoModel;
  vecinosArray: Array<Vecino>=[];
  vecinosFilter: Array<Vecino>=[];
  suplidor:Array<Suplidor>=[];
  suplidorArray:Array<Suplidor>=[];



  constructor(private vecinoService:VecinoService,private suplidorService:SuplidorService,private gastoService:gastoService) { }

  ngOnInit() {

    this.gasto=new GastoModel();
    this.getVecinos();
    this.getSuplidor();
  }

  getVecinos()
{

  this.vecinoService.getVecinos().subscribe(res=>{
    console.log(res);
    this.vecinosFilter=res;
     this.vecinosArray=this.vecinosFilter;
     console.log(this.vecinosArray);
  });
}

getSuplidor()
{

  this.suplidorService.getSuplidores().subscribe(res=>{
    console.log(res);
    this.suplidor=res;
     this.suplidorArray=this.suplidor;
     console.log(this.suplidorArray);
  })
}

addGasto(data) {

 
  this.gasto.IdSuplidor = data.value.SuplidorSelect;
  this.gasto.IdVecino = data.value.VecinoSelect;
  this.gasto.Descripcion = data.value.nombreInput;
  this.gasto.Monto = data.value.MontoInput;
  
  

    this.gastoService.addGastos(this.gasto).subscribe(res => {
      console.log(res);
      this.gasto.IdGasto = res.data.insertId;
    });

    alert("Registrado");
    this.limpiar();


}

public limpiar()
{
 window.location.reload();
}
}
