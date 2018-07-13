import { Component, OnInit } from '@angular/core';
import { DiscusionesService } from "../../Servicios/Discusiones-Service/discusiones.service";
import { Discusion } from "../../Clases/Discusion";
import { EstadoDiscusion } from '../../Clases/EstadoDiscusion';
import { FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-discusion-registro',
  templateUrl: './discusion-registro.component.html',
  styleUrls: ['./discusion-registro.component.css']
})
export class DiscusionRegistroComponent implements OnInit {

  discusion: Discusion;
  estados: Array<EstadoDiscusion> = [];

  constructor(private discusionService: DiscusionesService) {
  }

  fetchEstados() {
    this.discusionService.getEstados().subscribe(estados => {
      this.estados = estados;
    });
  }

  ngOnInit() {
    this.discusion = new Discusion();
    this.fetchEstados();
  }  

  Guardar(){
    this.discusion.DateModification = this.discusion.FechaCreacion;
    this.discusion.IdVecino = 1;
    this.discusion.ModifyBy = 1;

    this.discusionService.addDiscusion(this.discusion).subscribe(res =>
      {
        console.log(res);
        // this.discusion.IdDiscusion = res.data.insertId;
        this.discusion = {}
      }
    );
  }

  // guardarDiscusion(form: FormControl) {
  // 
  //   if (form.valid) {
  //     console.log('hay errores FORM');
  //   } else {
  //     console.log('NO hay errores FORM');
  //   }
  // }

}
