export class Vecino{

    constructor(
        public IdVecino?:number,
        public IdVecindario?:number,
        public IdCargo?:number,
        public Nombres?:String,
        public Apellidos?:String,
        public Cedula?: string,
        public Email?:string,
        public Direccion?:String
    ){
        this.IdVecino= (IdVecino) ? IdVecino : 0;
        this.IdVecindario = (IdVecindario) ? IdVecindario : 0;
        this.IdCargo = (IdCargo) ? IdCargo : 0;
        this.Nombres = (Nombres) ? Nombres : '';
        this.Apellidos = (Apellidos) ? Apellidos : '';
        this.Cedula = (Cedula) ? Cedula: '';
        this.Email = (Email) ? Email: '';
        this.Direccion = (Direccion) ? Direccion: '';
    }
}