import { Component } from '@angular/core';

@Component({
  selector: 'app-factura-comparador',
  imports: [],
  templateUrl: './factura-comparador.html',
  styleUrl: './factura-comparador.css'
})
export class FacturaComparador {
   onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const archivo = input.files[0];
      console.log('Archivo seleccionado:', archivo.name);
      // Aquí puedes hacer el upload, mostrar preview, etc.
    }
}
}
