import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-vecino',
  templateUrl: './registro-vecino.component.html',
  styleUrls: ['./registro-vecino.component.css']
})
export class RegistroVecinoComponent implements OnInit {

  titulo="Registro de Vecino";


  constructor(

    id:Number,
        nombre:string,
        apellidos:string,
        cedula: string,
        email:string,
        direccion:string,
        vecindario:Number,
        cargo:number
  ) { }

  ngOnInit() {
  }

}
