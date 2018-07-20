import { Component, OnInit, ViewChild } from '@angular/core';
import { Vecino } from '../../Clases/Vecino';
import { VecinoService } from '../../Servicios/Vecino-Service/vecino.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-vecinos',
  templateUrl: './consulta-vecinos.component.html',
  styleUrls: ['./consulta-vecinos.component.css']
})
export class ConsultaVecinosComponent implements OnInit {

  vecinosArray: any;
  vecinosFilter: Array<Vecino>=[];
  inputFilter:string;
  vecino:any;
  Vecino:Vecino;
  constructor(private vecinoService:VecinoService, private _router: Router) { }

  ngOnInit() {
    this.Vecino= new Vecino();
  }
  


  public buscarVecinos(data)
  {
    this.vecino=data.value.inputFilter;
    this.vecinoService.getVecinoNombre(this.vecino).subscribe(result=>{
      console.log(result);
      this.vecinosArray=result;
      this.vecinosFilter=this.vecinosArray;
      console.log('Vecinos--> '+this.vecinosArray);

    });


  }
 

}
