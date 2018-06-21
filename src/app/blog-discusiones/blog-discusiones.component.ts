import { Component, OnInit } from '@angular/core';
import { ComentariosService } from "../../Servicios/Comentarios.Service/comentarios.service";
import { DiscusionesService } from "../../Servicios/Discusiones-Service/discusiones.service";
import { Comentario } from "../../Clases/Comentario";
import { Discusion } from "../../Clases/Discusion";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-blog-discusiones',
  templateUrl: './blog-discusiones.component.html',
  styleUrls: ['./blog-discusiones.component.css']
})
export class BlogDiscusionesComponent implements OnInit {

  discusion: Discusion;
  discusionComentarios: Array<Comentario>;
  comentario: Comentario

  constructor(private _route: ActivatedRoute,private discusionService: DiscusionesService,
            private comentarioService: ComentariosService) { }

  ngOnInit() {
    this.comentario = new Comentario();
    this.discusion = new Discusion();
    this.discusionComentarios = [];
    let idDiscusion = +this._route.snapshot.paramMap.get('id');
    this.discusionService.getDiscusion(idDiscusion).subscribe( resultado =>
      this.discusion = resultado[0]
    )
    this.comentarioService.getComentariosDiscusion(idDiscusion).subscribe(comentarios =>
      this.discusionComentarios = comentarios
    )
  }

  Comentar()
  {
    let fecha = new Date();
    let stringFecha = fecha.getFullYear()+'-'+(fecha.getMonth()+1)+'-'+fecha.getDate();
    this.comentario.DateModification = stringFecha;
    this.comentario.Fecha = stringFecha;
    this.comentario.IdDiscusion = this.discusion.IdDiscusion;
    this.comentario.IdVecino = 1;
    this.comentario.ModifyBy = 1;

    this.comentarioService.addComentario(this.comentario).subscribe( data =>
      this.discusionComentarios.push(this.comentario)
    )
    this.comentario = new Comentario();
  }
}
