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
import {APP_ROUTING} from './app.routes';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service'
import { RegistroCuotasComponent } from './registro-cuotas/registro-cuotas.component';
import { RegistroPagocuotaComponent } from './registro-pagocuota/registro-pagocuota.component';
import { RegistroGastosComponent } from './registro-gastos/registro-gastos.component';
import { RegistroSuplidorComponent } from './registro-suplidor/registro-suplidor.component';

const appRoutes:Routes = [
  {
    path: 'menu',
    component: MenuPrincipalComponent
  },
  //  {
  //    path: 'solicitudes',
  //    canActivate: [AuthguardGuard],
  //    component: SolicitudesComponent
  //  }
]


@NgModule({
   declarations: [
      AppComponent,
      BlogDiscusionesComponent,
      RegistroVecinoComponent,
      RegistroAportesComponent,
      MenuPrincipalComponent,
      ConsultaDiscusionesComponent,
      SolicitudesComponent,
      DiscusionRegistroComponent,
      RegistroVecindariosComponent,
      LoginComponent,
      RegistroCuotasComponent,
      RegistroPagocuotaComponent,
      RegistroGastosComponent,
      RegistroSuplidorComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      APP_ROUTING,
      RouterModule.forRoot([\\\\\\\\r\\\\\\\\n{path
   ]
}),
  RouterModule.forRoot(appRoutes),
  BrowserModule
  ],
  providers: [UserService, AuthguardGuard,ComentariosService, DiscusionesService,VecinoService,SolicitudService,Aporteservice],
  bootstrap: [AppComponent]
})

export class AppModule { }
