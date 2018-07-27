import { Component, OnInit } from '@angular/core';
import {Suplidor} from '../../Clases/Suplidor';
import {SuplidorService} from '../../Servicios/Suplidor-Service/Suplidor.service';

@Component({
  selector: 'app-registro-suplidor',
  templateUrl: './registro-suplidor.component.html',
  styleUrls: ['./registro-suplidor.component.css']
})
export class RegistroSuplidorComponent implements OnInit {

  suplidor: Suplidor;

  constructor(private SuplidorServicio : SuplidorService) { }

  ngOnInit() {
    this.suplidor= new Suplidor();
  }

  addSuplidor(data) {

    this.suplidor.Nombre = data.value.NombreInput;
    this.suplidor.Telefono = data.value.TelefonoInput;
    this.suplidor.Direccion = data.value.DireccionInput;
    this.suplidor.Representante = data.value.RepresentanteInput;
    this.suplidor.TelRepresentante = data.value.TelRepresentanteInput;
  
      this.SuplidorServicio.addSuplidor(this.suplidor).subscribe(res => {
        console.log(res);
        this.suplidor.IdSuplidor = res.data.InsertId;
      });
  
      alert("Registrado");
      this.limpiar(data);
  }

  limpiar(data)
  {
    data.value.nombreInput = '';
    data.value.TelefonoInput = '';
    data.value.DireccionInput = '';
    data.value.RepresentanteInput = '';
    data.value.TelRepresentanteInput = '';
  }
}


