import { Component, OnInit } from '@angular/core';
import { DiscusionesService } from "../../Servicios/Discusiones-Service/discusiones.service";
import { Discusion } from "../../Clases/Discusion";

@Component({
  selector: 'app-discusion-registro',
  templateUrl: './discusion-registro.component.html',
  styleUrls: ['./discusion-registro.component.css']
})
export class DiscusionRegistroComponent implements OnInit {

  discusion: Discusion;

  constructor(private discusinService: DiscusionesService) { }

  ngOnInit() {
    this.discusion = new Discusion();
  }

  Guardar(){
    this.discusion.DateModification = this.discusion.FechaCreacion;
    this.discusion.IdVecino = 1;
    this.discusion.ModifyBy = 1;
    this.discusion.Estado = 0;

    this.discusinService.addDiscusion(this.discusion).subscribe(res =>
      {
        console.log(res);
        this.discusion.IdDiscusion = res.data.insertId;
      }
    );
  }

}
