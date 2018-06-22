import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BlogDiscusionesComponent } from './blog-discusiones/blog-discusiones.component';
import { RegistroVecinoComponent } from './registro-vecino/registro-vecino.component';
import { FormsModule }  from '@angular/forms';

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ConsultaDiscusionesComponent } from './consulta-discusiones/consulta-discusiones.component';
import { SolicitudesComponent } from './Solicitudes/Solicitudes.component';
import { DiscusionRegistroComponent } from './discusion-registro/discusion-registro.component';
import { RegistroVecindariosComponent } from './registro-vecindarios/registro-vecindarios.component';
import { HttpClientModule } from '@angular/common/http';
import { DiscusionesService } from '../Servicios/Discusiones-Service/discusiones.service';
import { ComentariosService } from "../Servicios/Comentarios.Service/comentarios.service";


// Rutas
import {APP_ROUTING} from './app.routes';
import { VecinosService } from '../Servicios/Vecinos-Service/vecinos.service';


@NgModule({
  declarations: [
    AppComponent,
    BlogDiscusionesComponent,
    RegistroVecinoComponent,
    MenuPrincipalComponent,
    ConsultaDiscusionesComponent,
    SolicitudesComponent,
    DiscusionRegistroComponent,
    RegistroVecindariosComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
    RouterModule.forRoot([
      { path: 'discusiones', component: ConsultaDiscusionesComponent},
      { path: 'discusiones/:id', component: BlogDiscusionesComponent },
      { path: 'rDiscusiones', component: DiscusionRegistroComponent},
      { path:  'vecinos', component:RegistroVecinoComponent}
    ])
  ],
  providers: [ ComentariosService, DiscusionesService,VecinosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
