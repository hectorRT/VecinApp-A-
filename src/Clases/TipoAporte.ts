export class TiposAportes{

    constructor(
        public IdTipoAporte?:number,
    
        public Nombre?:String,
      
    ){
        this.IdTipoAporte= (IdTipoAporte) ? IdTipoAporte : 0;
        this.Nombre =  Nombre;
    }
}