import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoLista } from './producto-lista/producto-lista';
import { AgregarProducto } from './agregar-producto/agregar-producto';
import { EditarProducto } from './editar-producto/editar-producto';

//gttp:localhost:4200/productos
const routes: Routes = [
  {path: 'productos', component: ProductoLista},
  {path: '', redirectTo: 'productos', pathMatch: 'full'},
  {path: 'agregar-producto', component: AgregarProducto},
  {path: 'editar-producto/:id', component: EditarProducto}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
