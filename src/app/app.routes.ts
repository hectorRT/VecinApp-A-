//import { RegistroVecindariosComponent } from './registro-vecindarios/registro-vecindarios.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RegistroVecinoComponent} from './registro-vecino/registro-vecino.component';
// import { Name3Component } from './';
// import { Name4Component } from './';
//import { PageNotFoundComponent } from './';

const ROUTES: Routes = [
    //{ path: 'Home', component: MenuPrincipalComponent },
    //{ path: 'Crear-vecinos', component: RegistroVecinoComponent },
    //{ path: '**', pathMatch: 'full', redirectTo: 'Home' }
    // { path: 'path4', component: Name4Component },
    // { path: '**', component: PageNotFoundComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
