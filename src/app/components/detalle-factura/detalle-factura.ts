import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacturaService } from '../../services/facturaService';
import { CommonModule } from '@angular/common';
import { Factura } from '../../models/factura.model';

@Component({
  selector: 'app-detalle-factura',
  imports: [CommonModule],
  templateUrl: './detalle-factura.html',
  styleUrls: ['./detalle-factura.css']
})
export class DetalleFactura implements OnInit {
  factura: Factura | null = null;   // aquí guardas los datos de la API
  cargando = true;
  error: string | null = null;
  reproduciendoAudio = false;

  constructor(
    private route: ActivatedRoute,
    private facturaService: FacturaService   // inyectas el servicio
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.facturaService.obtenerFactura(id).subscribe({
        next: (data: Factura) => {
          this.factura = data;   // guardas los datos en factura
          this.cargando = false;
        },
        error: (err) => {
          this.error = 'Error al cargar la factura. Por favor, inténtelo de nuevo.';
          this.cargando = false;
          console.error(err);
        }
      });
    } else {
      this.error = 'No se proporcionó un ID de factura.';
      this.cargando = false;
    }
  }

  reproducirResumen(): void {
    if (!this.factura?.resumen) return;

    this.reproduciendoAudio = true;
    const synthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(this.factura.resumen);
    utterance.lang = 'es-ES';

    utterance.onend = () => this.reproduciendoAudio = false;
    synthesis.speak(utterance);
  }

  detenerAudio(): void {
    this.reproduciendoAudio = false;
    window.speechSynthesis.cancel();
  }

  formatearMoneda(valor: number): string {
    return valor.toLocaleString('es-EC', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
  }
}
