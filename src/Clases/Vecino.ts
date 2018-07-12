export class Vecino{

    constructor(
        public IdVecino?:number,
        public IdVecindario?:number,
        public IdCargo?:number,
        public IdFrecuencia?:number,
        public Nombres?:String,
        public Apellidos?:String,
        public Cedula?: number,
        public Email?:string,
        public Direccion?:String
    ){
        this.IdVecino= (IdVecino) ? IdVecino : 0;
        this.IdVecindario = (IdVecindario) ? IdVecindario : 0;
        this.IdCargo = (IdCargo) ? IdCargo : 0;
        this.IdFrecuencia=(IdFrecuencia)? IdFrecuencia:0;
        this.Nombres =  Nombres;
        this.Apellidos =  Apellidos;
        this.Cedula = Cedula;
        this.Email = Email;
        this.Direccion =  Direccion;
    }
}