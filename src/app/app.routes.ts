import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { FacturaComparador } from './components/factura-comparador/factura-comparador';

export const routes: Routes = [
    {path:'',component:Login},
    {path:'facturas',component:FacturaComparador}
];
