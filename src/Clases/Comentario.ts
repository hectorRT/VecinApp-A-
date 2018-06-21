export class Comentario{
    constructor(public IdComentario?: number,
        public IdDiscusion?: number,
        public IdVecino?: number,
        public Fecha?: string,
        public Comentario?: string,
        public ModifyBy?: number,
        public DateModification?: string){
            this.IdComentario = (IdComentario) ? IdComentario : 0;
            this.IdDiscusion = (IdDiscusion) ? IdDiscusion : 0;
            this.IdVecino = (IdVecino) ? IdVecino : 0;
            this.Fecha = (Fecha) ? Fecha : '';
            this.Comentario = (Comentario) ? Comentario : '';
            this.ModifyBy = (ModifyBy) ? ModifyBy : 0;
            this.DateModification = (DateModification) ? DateModification : '';
        }
}