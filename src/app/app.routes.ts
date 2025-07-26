import { RouterModule, Routes } from '@angular/router';
import { DetalleFacturaComponent } from './components/detalle-factura/detalle-factura';
import { NgModule } from '@angular/core';

const routes: Routes = [
  // ... otras rutas
  { path: 'facturas/:id', component: DetalleFacturaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }