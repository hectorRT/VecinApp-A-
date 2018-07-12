export class Cargo
{

    constructor(

      public  idCargo?:number,
       public  cargo?:string
    )
    {

        this.idCargo=(idCargo) ? idCargo:0;
        this.cargo =cargo;
    }
}