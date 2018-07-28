export class Vecino{

    constructor(
        public IdVecino?:number,
        public IdVecindario?:number,
        public IdCargo?:number,
        public Idfrecuencia?:number,
        public Nombres?:string,
        public Apellidos?:string,
        public Cedula?: number,
        public Email?:string,
        public Clave?:string,
        public Direccion?:string,
        public token?: string
    ){
        this.IdVecino= (IdVecino) ? IdVecino : 0;
        this.IdVecindario = (IdVecindario) ? IdVecindario : 0;
        this.IdCargo = (IdCargo) ? IdCargo : 0;
        this.Idfrecuencia=(Idfrecuencia)? Idfrecuencia:0;
        this.Nombres =  Nombres;
        this.Apellidos =  Apellidos;
        this.Cedula = Cedula;
        this.Email = Email;
        this.Clave=Clave;
        this.Direccion =  Direccion;
        this.token = token;
    }
}