export class Aportes{

    constructor(
        public IdAporte?:number,
        public IdVecino?:number,
        public FechaCreacion?:Date,
        public Nombre?:String,
        public Nota?: String
    ){
        this.IdAporte= (IdAporte) ? IdAporte : 0;
        this.IdVecino= IdVecino;
        this.FechaCreacion =  FechaCreacion;
        this.Nombre =  Nombre;
        this.Nota = Nota;
    }
}