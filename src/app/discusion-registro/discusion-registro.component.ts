import { Component, OnInit } from '@angular/core';
import { DiscusionesService } from "../../Servicios/Discusiones-Service/discusiones.service";
import { Discusion } from "../../Clases/Discusion";
import { EstadoDiscusion } from '../../Clases/EstadoDiscusion';
import { FormControl } from '../../../node_modules/@angular/forms';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-discusion-registro',
  templateUrl: './discusion-registro.component.html',
  styleUrls: ['./discusion-registro.component.css']
})
export class DiscusionRegistroComponent implements OnInit {

  discusion: Discusion = {};
  estados: Array<EstadoDiscusion> = [];

  constructor(private discusionService: DiscusionesService, private _route: ActivatedRoute) {
  }

  
  ngOnInit() {
    this.fetchEstados();
    
    let id: number = +this._route.snapshot.paramMap.get('id');
    console.log('id: ' + id);
    if (id > 0) {
      this.discusionService.getDiscusion(id).subscribe(discusion => {
        this.discusion = discusion[0];
      });
    }
    // console.log('local: ' + this.discusion.Titulo);
  }
  
  fetchEstados() {
    this.discusionService.getEstados().subscribe(estados => {
      this.estados = estados;
    });

  }

  onSave() {
    console.log(this.discusion);
    if (this.discusion.IdDiscusion == 0 || this.discusion.IdDiscusion == undefined) {
      this.create();
    } else {
      this.update();
    }
  }
  
  create(){
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
  

  update() {
    this.discusion.DateModification = this.discusion.FechaCreacion;
    this.discusion.IdVecino = 1;
    this.discusion.ModifyBy = 1;

    this.discusionService.updateDiscusion(this.discusion).subscribe(res => {
      console.log(res);
      this.discusion = {}
    });
  }

  onDelete() {
    this.discusionService.deleteDiscusion(this.discusion.IdDiscusion).subscribe(res => {
      console.log(res);
      this.discusion = {};
    });
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
