import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { FacturaComparador } from './components/factura-comparador/factura-comparador';
import { Footer } from './components/footer/footer';
import { DetalleFactura } from './components/detalle-factura/detalle-factura';
import { Login } from './components/login/login';

@Component({
  selector: 'app-root',
  //, Navbar, FacturaComparador, Footer
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('comparador_facturas');
}
