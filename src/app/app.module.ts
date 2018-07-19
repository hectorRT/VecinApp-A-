
import { SolicitudService } from './../Servicios/Solicitudes-Service/solicitudes.service';
import { BlogDiscusionesComponent } from './blog-discusiones/blog-discusiones.component';
import { RegistroVecinoComponent } from './registro-vecino/registro-vecino.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ConsultaDiscusionesComponent } from './consulta-discusiones/consulta-discusiones.component';
import { SolicitudesComponent } from './Solicitudes/Solicitudes.component';
import { DiscusionRegistroComponent } from './discusion-registro/discusion-registro.component';
import { RegistroVecindariosComponent } from './registro-vecindarios/registro-vecindarios.component';
import { HttpClientModule } from '@angular/common/http';
import { DiscusionesService } from '../Servicios/Discusiones-Service/discusiones.service';
import { ComentariosService } from "../Servicios/Comentarios.Service/comentarios.service";
import { VecinoService } from '../Servicios/Vecino-Service/vecino.service';
import { RegistroAportesComponent } from './registro-aportes/registro-aportes.component';
import { Aporteservice } from '../Servicios/Aportes-Service/aporte.service';
// Rutas
import { routing } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './_guards/index';
import { AuthenticationService } from './_services/authentication.service';
import { AlertService } from './_services/alert.service';
import { UserService } from './_services/user.service';
import { AppMaterialModule } from './AppMaterial/AppMaterialModule';

const appRoutes: Routes = [
  { path: 'menu', component: MenuPrincipalComponent },
  { path: 'solicitudes', component: SolicitudesComponent },
  { path: 'discusiones', component: ConsultaDiscusionesComponent },
  { path: 'aportes', component: RegistroAportesComponent },
  { path: 'discusiones/:id', component: BlogDiscusionesComponent },
  { path: 'rDiscusiones', component: DiscusionRegistroComponent },
  { path: 'rDiscusiones/:id', component: DiscusionRegistroComponent },
  { path: 'vecinos', component: RegistroVecinoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuPrincipalComponent } 
]

@NgModule({
  declarations: [AppComponent,
    HeaderComponent,
    BlogDiscusionesComponent,
    RegistroVecinoComponent,
    RegistroAportesComponent,
    MenuPrincipalComponent,
    ConsultaDiscusionesComponent,
    SolicitudesComponent,
    DiscusionRegistroComponent,
    RegistroVecindariosComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
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
  providers: [UserService,AlertService,AuthenticationService,AuthGuard,ComentariosService, DiscusionesService, VecinoService, SolicitudService, Aporteservice],
  bootstrap: [AppComponent]
})

export class AppModule { }