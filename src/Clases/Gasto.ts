export class GastoModel{

    constructor(public IdGasto?:number,public IdVecino?:number,public IdSuplidor?:number,public Descripcion?:string,public Monto?:number,public Fecha?:Date)
    {
        this.IdVecino=IdVecino;
        this.IdSuplidor=IdSuplidor;
        this.IdGasto=IdGasto;
        this.Descripcion=Descripcion;
        this.Monto=Monto;
        this.Fecha=Fecha;
    }
}