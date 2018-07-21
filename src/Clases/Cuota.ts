export class Cuotas {

    constructor(
        public IdCuota?: number,
        public idVecindario?: Number,
        public fecha?: Date,
        public numeroCuota?: String,
        public monto?: String,
        public balance?: String,
        public fechaUltimoPago?: Date,
        public saldada?: String,
    ) {
        this.IdCuota = (IdCuota) ? IdCuota : 0;
        this.idVecindario = (idVecindario) ? idVecindario : 0;
        this.fecha = fecha;
        this.numeroCuota = numeroCuota;
        this.monto = monto;
        this.balance = balance;
        this.fechaUltimoPago = fechaUltimoPago;
        this.saldada = saldada;


    }
}



