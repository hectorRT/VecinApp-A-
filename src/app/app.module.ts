import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogDiscusionesComponent } from './blog-discusiones/blog-discusiones.component';
import { FormsModule }  from '@angular/forms';
import { RegistroVecinoComponent } from './registro-vecino/registro-vecino.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogDiscusionesComponent,
    RegistroVecinoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
