export class Suplidor {

    constructor(
        public IdSuplidor?:number,
        public Nombre?:string,
        public Telefono?:string,
        public Direccion?:string,
        public Representante?:String,
        public TelRepresentante?:String,

    ){
        this.IdSuplidor= (IdSuplidor) ? IdSuplidor : 0;
        this.Nombre = Nombre;
        this.Telefono = Telefono;
        this.Direccion =  Direccion;
        this.Representante =  Representante;
        this.TelRepresentante =  TelRepresentante;
    }
}
