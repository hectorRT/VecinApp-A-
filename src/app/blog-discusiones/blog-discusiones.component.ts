import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-discusiones',
  templateUrl: './blog-discusiones.component.html',
  styleUrls: ['./blog-discusiones.component.css']
})
export class BlogDiscusionesComponent implements OnInit {

  titulo = "Blog de Discusiones";
  tituloDiscusion = "Titulo de la discusion";
  descripcionDiscusion = "Lorem ipsum endis voluptate cum doloremque veniam adipisci laborum quisquam repudiandae ipsa aliquam assumenda corrupti animi ab iusto!";
  usuarioLogueado = "Usuario Logueado";

  comentarios = [];

  constructor() { }

  ngOnInit() {
  }

  cargarComentarios()
  {
    if(localStorage.getItem("Comentarios"))
    {
      this.comentarios = JSON.parse(localStorage.getItem("Comentarios"));
    }
  }

  GuardarGasto(Blog){
    var comentario = Blog.value.Comentario;

    var coment = {Usuario: this.usuarioLogueado, Comentario: comentario};

    this.comentarios.push(coment);

    //localStorage.setItem("Comentarios", JSON.stringify(this.comentarios));

    Blog.reset();
  }
}
