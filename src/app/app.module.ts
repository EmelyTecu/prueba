import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de enrutamiento

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Agrega AppRoutingModule aquí
    FormsModule, // Usar FormsModule para vincular ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
