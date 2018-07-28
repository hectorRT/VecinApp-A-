export class Frecuencia{



    constructor(

        public  IdFrecuencia?:number,
         public frecuencia?:string
      )
      {
  
          this.IdFrecuencia=(IdFrecuencia) ? IdFrecuencia:0;
          this.frecuencia =frecuencia;
      }

}