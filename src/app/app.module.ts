import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogDiscusionesComponent } from './blog-discusiones/blog-discusiones.component';
import { RegistroVecinoComponent } from './registro-vecino/registro-vecino.component';
import { FormsModule }  from '@angular/forms';

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogDiscusionesComponent,
    RegistroVecinoComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
