export class PagoCuota {

    constructor(
        public IdPago?: Number,
        public idCuota?: number,
        public idVecino?: Number,
        public fecha?: Date,
        public monto?: String,
        public nota?: String,
    ) {
        this.IdPago = (IdPago) ? IdPago : 0;
        this.idCuota = (idCuota) ? idCuota : 0;
        this.idVecino = (idVecino) ? idVecino : 0;
        this.fecha = fecha;
        this.monto = monto;
        this.nota = nota;


    }
}


