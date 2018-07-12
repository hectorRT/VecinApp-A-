export class Frecuencia{



    constructor(

        public  idFrecuencia?:number,
         public frecuencia?:string
      )
      {
  
          this.idFrecuencia=(idFrecuencia) ? idFrecuencia:0;
          this.frecuencia =frecuencia;
      }

}