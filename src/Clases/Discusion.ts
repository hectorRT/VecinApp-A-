export class Discusion{
    constructor(public IdDiscusion?: number,
        public IdVecino?: number,
        public Titulo?: string,
        public Descripcion?: string,
        public Conclusion?: string,
        public Estado?: number,
        public FechaCreacion?: string,
        public ModifyBy?: number,
        public DateModification?: string){
            this.IdDiscusion = (IdDiscusion) ? IdDiscusion : 0;
            this.IdVecino = (IdVecino) ? IdVecino : 0;
            this.Titulo = (Titulo) ? Titulo : '';
            this.Descripcion = (Descripcion) ? Descripcion : '';
            this.Conclusion = (Conclusion) ? Conclusion : '';
            this.Estado = (Estado) ? Estado : 0;
            this.FechaCreacion = (FechaCreacion) ? FechaCreacion : '';
            this.ModifyBy = (ModifyBy) ? ModifyBy : 0;
            this.DateModification = (DateModification) ? DateModification : '';
        }
}