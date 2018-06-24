import { Component, OnInit } from '@angular/core';
import {Vecino} from '../../Clases/Vecino';
import {VecinoService} from '../../Servicios/Vecino-Service/vecino.service';



@Component({
  selector: 'app-registro-vecino',
  templateUrl: './registro-vecino.component.html',
  styleUrls: ['./registro-vecino.component.css']
})
export class RegistroVecinoComponent implements OnInit {

  vecino:Vecino;
  vecinosArray: Array<Vecino>;


  constructor(private vecinoServicio: VecinoService) { }

  ngOnInit() {

    this.vecino= new Vecino();
    this.vecinosArray = [];
  }


  getVecinos()
  {
    this.vecinoServicio.getVecinos().subscribe(res=>{
      console.log(res);
    });
  }



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

  }


  getVecino(id:number) {
    var data;
    this.vecinoServicio.getVecino(1).subscribe(res => {
      console.log(res);

    });
    
  }
}
