
export class VecindarioModel{


    constructor(public IdVecindario?:number,public fechaCreacion?:number,public nombre?:string,public imagenLogo?:Text,public montoAporteMensual?:number,public ciudad?:string,public provincia?:string, public sector?:string,public direccionLocal?:string,public fondo?:number )
    {
        this.IdVecindario=(IdVecindario)?IdVecindario:0;
        this.fechaCreacion=(fechaCreacion)?fechaCreacion:0;
        this.nombre=nombre;
        this.montoAporteMensual=(montoAporteMensual)?montoAporteMensual:0;
        this.ciudad=ciudad;
        this.provincia=provincia;
        this.sector=sector;
        this.direccionLocal=direccionLocal;
        this.fondo=(fondo)?fondo:0;

    }

}