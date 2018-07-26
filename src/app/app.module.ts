import { RegistroPagocuotaComponent } from './registro-pagocuota/registro-pagocuota.component';
import { RegistroGastosComponent } from './registro-gastos/registro-gastos.component';
import { Cargo } from './../Clases/Cargo';
import { FrecuenciaPagoService } from './../Servicios/Frecuencia/frecuencia-pago.service';
import { EventoService } from './../Servicios/Evento/evento.service';
//Servicios
import { SolicitudService } from './../Servicios/Solicitudes-Service/solicitudes.service';
import { DiscusionesService } from '../Servicios/Discusiones-Service/discusiones.service';
import { ComentariosService } from "../Servicios/Comentarios.Service/comentarios.service";
import { VecinoService } from '../Servicios/Vecino-Service/vecino.service';
import { Aporteservice } from '../Servicios/Aportes-Service/aporte.service';
import { AlertService } from './_services/alert.service';
import { AppMaterialModule } from './AppMaterial/AppMaterialModule';
import { AuthenticationService } from './_services/authentication.service';
import { AuthGuard } from './_guards/index';
import { SuplidorService } from '../Servicios/Suplidor-Service/Suplidor.service';
import { TipoAporteService } from '../Servicios/TipoAporte-Service/TipoAporte.service'
//Componentes
import { RegistroSuplidorComponent } from './registro-suplidor/registro-suplidor.component';
import { BlogDiscusionesComponent } from './blog-discusiones/blog-discusiones.component';
import { RegistroVecinoComponent } from './registro-vecino/registro-vecino.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ConsultaDiscusionesComponent } from './consulta-discusiones/consulta-discusiones.component';
import { ConsultaVecinosComponent } from './consulta-vecinos/consulta-vecinos.component';
import { SolicitudesComponent } from './Solicitudes/Solicitudes.component';
import { DiscusionRegistroComponent } from './discusion-registro/discusion-registro.component';
import { RegistroVecindariosComponent } from './registro-vecindarios/registro-vecindarios.component';
import {ConsultaEventosComponent} from './consulta-eventos/consulta-eventos.component';

import { HeaderComponent } from './header/header.component';
import { RegistroAportesComponent } from './registro-aportes/registro-aportes.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

//Complementos
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroEventosComponent } from './registro-eventos/registro-eventos.component';
import { RegistroCuotasComponent } from './registro-cuotas/registro-cuotas.component';
import { TiposAportesComponent } from './tipos-aportes/tipos-aportes.component';
import { VecindarioService } from '../Servicios/Vecindario-Service/vecindario-Servicio';


const appRoutes: Routes = [
  { path: 'menu', component: MenuPrincipalComponent },
  { path: 'solicitudes', component: SolicitudesComponent },
  { path: 'discusiones', component: ConsultaDiscusionesComponent },
  { path: 'aportes', component: RegistroAportesComponent },
  { path: 'discusiones/:id', component: BlogDiscusionesComponent },
  { path: 'rDiscusiones', component: DiscusionRegistroComponent },
  { path: 'rDiscusiones/:id', component: DiscusionRegistroComponent },
  { path: 'vecinos', component: RegistroVecinoComponent },
  { path: 'vecindario', component: RegistroVecindariosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuPrincipalComponent } ,
  { path: 'suplidores', component: RegistroSuplidorComponent } ,
  { path: 'eventos', component: RegistroEventosComponent },
  { path: 'pagoscuota', component: RegistroCuotasComponent }, 
  { path: 'consultavecinos', component: ConsultaVecinosComponent },
  { path: 'tipoaportes', component: ConsultaVecinosComponent },
]

@NgModule({
  declarations: [AppComponent,
    HeaderComponent,
    BlogDiscusionesComponent,
    RegistroAportesComponent,
    MenuPrincipalComponent,
    ConsultaDiscusionesComponent,
    SolicitudesComponent,
    LoginComponent,
    HomeComponent,
    RegistroSuplidorComponent,
    RegistroEventosComponent,
    ConsultaVecinosComponent,
    ConsultaEventosComponent,
    DiscusionRegistroComponent,
    RegistroCuotasComponent,
    RegistroGastosComponent,
    RegistroPagocuotaComponent,
    RegistroVecindariosComponent,
    RegistroVecinoComponent,
    TiposAportesComponent
  ],
  imports: [
    ReactiveFormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    RouterModule.forRoot([
    ]),
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
<<<<<<< HEAD
  providers: [Aporteservice,TipoAporteService,ComentariosService,DiscusionesService,VecinoService,FrecuenciaPagoService,EventoService ,SuplidorService,UserService,AlertService,AuthenticationService,AuthGuard,ComentariosService, DiscusionesService, VecinoService, SolicitudService, Aporteservice,VecindarioService],
=======
  providers: [Aporteservice,TipoAporteService,ComentariosService,DiscusionesService,VecinoService,FrecuenciaPagoService,EventoService ,SuplidorService,AlertService,AuthenticationService,AuthGuard,ComentariosService, DiscusionesService, VecinoService, SolicitudService, Aporteservice],
>>>>>>> f29b76b914b91cf14cb13984e645fca9e65d3c40
  bootstrap: [AppComponent]
})

export class AppModule { }