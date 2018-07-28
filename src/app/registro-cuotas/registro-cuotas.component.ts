import { CuotaService} from './../../Servicios/Cuotas-Service/cuota.service';
import { Cuotas } from './../../Clases/Cuota';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-registro-cuotas',
  templateUrl: './registro-cuotas.component.html',
  styleUrls: ['./registro-cuotas.component.css']
})
export class RegistroCuotasComponent implements OnInit {

  Cuotas: Cuotas;

  constructor(private CuotaServico: CuotaService ) { }

  ngOnInit() {
    this.Cuotas = new Cuotas();
  }

  addCuota(data) {

    this.Cuotas.balance = data.value.balanceInput;
    this.Cuotas.fecha = data.value.fechaInput;
    this.Cuotas.fechaUltimoPago = data.value.fechaUltimoPagoInput;
    this.Cuotas.monto = data.value.montoInput;
    this.Cuotas.numeroCuota = data.value.numeroCuotaInput;
    this.Cuotas.saldada = data.value.saldadaInput;

    this.CuotaServico.addCuotas(this.Cuotas).subscribe(res =>{
      this.Cuotas.IdCuota = res.data.inserId;
    });

    alert("Cuota Registrada");
    this.limpiar(data);


  }

  limpiar(data) {
    data.value.balanceInput = '';
    data.value.fechaInput = '';
    data.value.fechaUltimoPagoInput = '';
    data.value.montoInput = '';
    data.value.numeroCuotaInput = '';
    data.value.saldadaInput = '';
  }

}
