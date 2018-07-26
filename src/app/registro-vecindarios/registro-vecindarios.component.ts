import { Component, OnInit } from '@angular/core';
import { VecindarioModel } from '../../Clases/Vecindario';
import { VecindarioService } from '../../Servicios/Vecindario-Service/vecindario-Servicio';

@Component({
  selector: 'app-registro-vecindarios',
  templateUrl: './registro-vecindarios.component.html',
  styleUrls: ['./registro-vecindarios.component.css']
})
export class RegistroVecindariosComponent implements OnInit {

  vecindario:VecindarioModel;
  vecindarioArray: Array<VecindarioModel>=[];
  vecindarioFilter: Array<VecindarioModel>=[];

  constructor(private vecindarioService:VecindarioService) { }

  ngOnInit() {

    this.vecindario=new VecindarioModel();
  }

  addVecindario(data) {
    this.vecindario.nombre = data.value.NombreVecindarioInput;
    this.vecindario.fechaCreacion = Date.now();
    this.vecindario.ciudad = data.value.CiudadInput;
    this.vecindario.direccionLocal = data.value.DireccionInput;
    this.vecindario.fondo = data.value.FondoInput;
    this.vecindario.montoAporteMensual = data.value.MontoInput;
    this.vecindario.provincia = data.value.ProvinciaInput;
    this.vecindario.sector = data.value.SectorInput;

      this.vecindarioService.addVecindario(this.vecindario).subscribe(res => {
        console.log(res);
        this.vecindario.IdVecindario = res.data.insertId;
      });
  
      alert("Registrado");
      this.limpiar(data);

  }

  limpiar(data)
  {
    data.value.IdVecindarioInput='';
    data.value.NombreVecindarioInput='';
    data.value.direccionInput = '';
    data.value.FondoInput='';
    data.value.MontoInput='';
    data.value.ProvinciaInput='';
    data.value.SectorInput='';
  
    window.location.reload();

  }

}
