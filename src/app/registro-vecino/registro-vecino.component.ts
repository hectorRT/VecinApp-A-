import { Component, OnInit } from '@angular/core';
import {Vecino} from '../../Clases/Vecino';
import {VecinoService} from '../../Servicios/Vecino-Service/vecino.service';
import {CargoService} from '../../Servicios/Cargo/cargo.service';
import {Route} from '@angular/router';
import { Cargo } from '../../Clases/Cargo';
import { FrecuenciaPagoService } from '../../Servicios/Frecuencia/frecuencia-pago.service';
import { Frecuencia } from '../../Clases/FrecuenciaPago';
import { VecindarioService } from '../../Servicios/Vecindario-Service/vecindario-Servicio';
import { VecindarioModel } from '../../Clases/Vecindario';


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
  CargoArray: Array<Cargo>=[];
  cargos:Array<Cargo>=[];
  frecuencia:Array<Frecuencia>=[];
  frecuenciaArray:Array<Frecuencia>=[];
  vecindario:Array<VecindarioModel>=[];
  vecindarioArray:Array<VecindarioModel>=[];


  constructor(private vecindarioService:VecindarioService,private vecinoServicio: VecinoService,private cargoServicio:CargoService,private frecuenciaServicios:FrecuenciaPagoService) { }

  ngOnInit() {

    this.vecino= new Vecino();
    this.getCargos();
    this.getFrecuencias();
    this.getVecindario();
  }

getCargos()
{

  this.cargoServicio.getCargos().subscribe(res=>{
    console.log(res);
    this.cargos=res;
     this.CargoArray=this.cargos;
     console.log(this.CargoArray);
  })
}

getFrecuencias()
{
  this.frecuenciaServicios.getFrecuencia().subscribe(res=>{
    console.log(res);
    this.frecuencia=res;
     this.frecuenciaArray=this.frecuencia;
     console.log(this.frecuenciaArray);
  })
}

getVecindario()
{
  this.vecindarioService.getVecindarios().subscribe(res=>{
    console.log(res);
    this.vecindario=res;
    this.vecindarioArray=this.vecindario;
    console.log(this.vecindarioArray);
  })
}

  addVecino(data) {

    this.vecino.IdVecindario=data.value.VecindarioSelect;
    this.vecino.Nombres = data.value.nombreInput;
    this.vecino.Apellidos = data.value.apellidosInput;
    this.vecino.Cedula = data.value.cedulaInput;
    this.vecino.Email = data.value.emailInput;
    this.vecino.Clave=data.value.claveInput;
    this.vecino.Direccion =data.value.direccionInput;
    this.vecino.Idfrecuencia=data.value.FrecuenciaSelect;
    this.vecino.IdCargo=data.value.CargoSelect;

      this.vecinoServicio.addVecino(this.vecino).subscribe(res => {
        console.log(res);
        this.vecino.IdVecino = res.data.insertId;
      });
  
      alert("Registrado");
      this.limpiar(data);

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
