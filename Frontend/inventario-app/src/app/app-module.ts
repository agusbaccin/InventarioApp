import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductoLista } from './producto-lista/producto-lista';
import { HttpClientModule } from '@angular/common/http';
import { AgregarProducto } from './agregar-producto/agregar-producto';
import { FormsModule } from '@angular/forms';
import { EditarProducto } from './editar-producto/editar-producto';

@NgModule({
  declarations: [
    App,
    ProductoLista,
    AgregarProducto,
    EditarProducto
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
