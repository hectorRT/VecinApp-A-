export class Solicitud{

    constructor(
        public id?:number,
        public fecha?:Date,
        public tema?:String,
        public descripcion?: number
    ){
        this.id= (id) ? id : 0;
        this.fecha =  fecha;
        this.tema =  tema;
        this.descripcion = descripcion;
    }
}