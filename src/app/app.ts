import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { Navbar } from "./components/navbar/navbar";
import { FacturaComparador } from "./components/factura-comparador/factura-comparador";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, FacturaComparador, Footer],
=======


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
>>>>>>> 711a6f9e29588f997ce63d711e9c94b3eb21d263
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
<<<<<<< HEAD
  protected title = 'comparador-facturas';
=======
  protected title = 'proyecto_IA';
>>>>>>> 711a6f9e29588f997ce63d711e9c94b3eb21d263
}
