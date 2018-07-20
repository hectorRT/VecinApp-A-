import { RegistroPagocuotaComponent } from './registro-pagocuota/registro-pagocuota.component';
import { RegistroEventosComponent } from './registro-eventos/registro-eventos.component';
import { RegistroVecindariosComponent } from './registro-vecindarios/registro-vecindarios.component';
import { DiscusionRegistroComponent } from './discusion-registro/discusion-registro.component';
import { BlogDiscusionesComponent } from './blog-discusiones/blog-discusiones.component';
import { ConsultaDiscusionesComponent } from './consulta-discusiones/consulta-discusiones.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { SolicitudesComponent } from './Solicitudes/Solicitudes.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/index';
import { RegistroAportesComponent } from './registro-aportes/registro-aportes.component';
import { RegistroSuplidorComponent } from './registro-suplidor/registro-suplidor.component';
import { RegistroCuotasComponent } from './registro-cuotas/registro-cuotas.component';
import { ConsultaVecinosComponent } from './consulta-vecinos/consulta-vecinos.component';
import { RegistroGastosComponent } from './registro-gastos/registro-gastos.component';
import { RegistroVecinoComponent } from './registro-vecino/registro-vecino.component';

const appRoutes: Routes = [
  { path: 'solicitudes', component: SolicitudesComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuPrincipalComponent, canActivate: [AuthGuard] },
  { path: 'solicitudes', component: SolicitudesComponent , canActivate: [AuthGuard]},
  { path: 'discusiones', component: ConsultaDiscusionesComponent , canActivate: [AuthGuard]},
  { path: 'aportes', component: RegistroAportesComponent , canActivate: [AuthGuard]},
  { path: 'discusiones/:id', component: BlogDiscusionesComponent , canActivate: [AuthGuard]},
  { path: 'rDiscusiones', component: DiscusionRegistroComponent , canActivate: [AuthGuard]},
  { path: 'rDiscusiones/:id', component: DiscusionRegistroComponent , canActivate: [AuthGuard]},
  { path: 'vecindario', component: RegistroVecindariosComponent , canActivate: [AuthGuard]},
  { path: 'menu', component: MenuPrincipalComponent , canActivate: [AuthGuard]} ,
  { path: 'suplidores', component: RegistroSuplidorComponent , canActivate: [AuthGuard]} ,
  { path: 'evento', component: RegistroEventosComponent , canActivate: [AuthGuard]} ,
  { path: 'pagoscuota', component: RegistroCuotasComponent , canActivate: [AuthGuard]} ,
  { path: 'consultavecinos', component: ConsultaVecinosComponent , canActivate: [AuthGuard]} ,
  { path: 'blogdiscusiones', component: BlogDiscusionesComponent , canActivate: [AuthGuard]} ,
  { path: 'gastos', component: RegistroGastosComponent , canActivate: [AuthGuard]} ,
  { path: 'pagocuotas', component: RegistroPagocuotaComponent , canActivate: [AuthGuard]} ,
  { path: 'registrovecino', component: RegistroVecinoComponent , canActivate: [AuthGuard]} ,
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);