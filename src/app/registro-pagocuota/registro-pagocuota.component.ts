import { PagoCuota } from './../../Clases/PagoCuota';
import { Component, OnInit } from '@angular/core';
import {PagoCuota} from '../../Clases/PagoCuota';
import {PagoCuotaService} from '../../Servicios/PagoCuotas-Service/pagocuota.service';


@Component({
  selector: 'app-registro-pagocuota',
  templateUrl: './registro-pagocuota.component.html',
  styleUrls: ['./registro-pagocuota.component.css']
})
export class RegistroPagocuotaComponent implements OnInit {

  pagocuotas: PagoCuota;

  constructor(private pagocuotaservico: PagoCuotaService) { }

  ngOnInit() {

    this.pagocuotas = new PagoCuota();
  }

  addPago(data) {
    this.pagocuotas.monto = data.value.montoInput;
    this.pagocuotas.nota = data.value.notaInput;
    this.pagocuotas.fecha = data.valur.fechaInput;

    this.pagocuotaservico.addPagoCuotas(this.pagocuotas).subscribe(res =>{
      console.log(res);
      this.pagocuotas.IdPago = res.data.insertId;
    });

    alert("Pago Registrado");
    this.limpiar(data);
  }

  limpiar(data) {

    data.value.montoInput = '';
    data.value.notaInput = '';
    data.value.fechaInput = '';

  }

}
