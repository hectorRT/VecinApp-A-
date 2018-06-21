import { Component, OnInit } from '@angular/core';
import { Discusion } from '../../Clases/Discusion';
import { DiscusionesService } from "../../Servicios/Discusiones-Service/discusiones.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-consulta-discusiones',
  templateUrl: './consulta-discusiones.component.html',
  styleUrls: ['./consulta-discusiones.component.css']
})
export class ConsultaDiscusionesComponent implements OnInit {

  discusiones: Array<Discusion> = [];
  discusionesFilter: Array<Discusion> = [];
  criterio: string = '';

  constructor(private _router: Router,
        private discusionService: DiscusionesService) { }

  ngOnInit() {
    this.BuscarDiscusiones();
  }

  BuscarDiscusiones(){
    this.discusionService.getDiscusiones().subscribe(discusiones =>
      {
        this.discusiones = discusiones;
        this.discusionesFilter = discusiones;
      }
    )
  }

  Filtrar()
  {
    this.discusionesFilter = this.discusiones.filter((disc:Discusion) => disc.Titulo.includes(this.criterio));
  }

  reDireccionar(discusion: Discusion){
    this._router.navigate([`/discusiones/${discusion.IdDiscusion}`]);
  }
}
