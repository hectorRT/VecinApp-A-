import { Component, OnInit } from '@angular/core';
import {Vecino} from '../../Clases/Vecino';
import {VecinoService} from '../../Servicios/Vecino-Service/vecino.service';
import {Route} from '@angular/router';


@Component({
  selector: 'app-registro-vecino',
  templateUrl: './registro-vecino.component.html',
  styleUrls: ['./registro-vecino.component.css']
})
export class RegistroVecinoComponent implements OnInit {

  vecino:Vecino;
  //arreglos
  vecinosArray: Array<Vecino>=[];
  vecinosFilter: Array<Vecino>=[];
  nombres:string='';


  constructor(private vecinoServicio: VecinoService) { }

  ngOnInit() {

    this.vecino= new Vecino();
   this.buscarVecino();
  }


 /* getVecinos()
  {
    this.vecinoServicio.getVecinos().subscribe(res=>{
      console.log(res);
    });
  }
*/


  addVecino(data) {

    this.vecino.Nombres = data.value.nombreInput;
    this.vecino.Apellidos = data.value.apellidosInput;
    this.vecino.Cedula = data.value.cedulaInput;
    this.vecino.Email = data.value.emailInput;
    this.vecino.Direccion =data.value.direccionInput;
    this.vecino.IdVecindario=1;
    this.vecino.IdCargo=1

    this.vecinoServicio.addVecino(this.vecino).subscribe(res => {
      console.log(res);
      this.vecino.IdVecino = res.data.insertId;
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

  buscarVecino()
  {
    this.vecinoServicio.getVecinos().subscribe(vecino=>{
      this.vecinosArray=vecino;
      this.vecinosFilter=this.vecinosArray;
    });
  }

  filtrar()
  {
    this.vecinosFilter = this.vecinosArray.filter((veci:Vecino)=>veci.Nombres.includes(this.nombres));
    console.log(this.vecinosFilter);

  }

  limpiar(data)
  {
    data.value.nombreInput='';
    data.value.IdVecindario = '';
    data.value.IdCargo='';
    data.value.IdVecino='';
    data.value.apellidosInput='';
    data.value.cedulaInput='';
    data.value.direccionInput='';
    data.value.emailInput='';
    window.location.reload();

  }
}
