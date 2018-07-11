export class Solicitud{

    constructor(
        public IdSolicitudes?:number,
        public Fecha?:Date,
        public Tema?:String,
        public Descripcion?: number
    ){
        this.IdSolicitudes= (IdSolicitudes) ? IdSolicitudes : 0;
        this.Fecha =  Fecha;
        this.Tema =  Tema;
        this.Descripcion = Descripcion;
    }
}