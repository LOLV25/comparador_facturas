import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Factura } from '../../services/factura';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.html',
  styleUrls: ['./detalle-factura.css']
})
export class DetalleFacturaComponent implements OnInit {
  Factura: any = null;
  cargando = true;
  error: string | null = null;
  reproduciendoAudio = false;
  

  constructor(
    private route: ActivatedRoute,
    private factura: Factura
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.factura.obtenerFactura(id).subscribe({
        next: (data) => {
          this.factura = data;
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
    if (!this.Factura?.resumen) return;
    
    this.reproduciendoAudio = true;
    const synthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(this.Factura.resumen);
    utterance.lang = 'es-ES';
    
    utterance.onend = () => this.reproduciendoAudio = false;
    synthesis.speak(utterance);
  }

  detenerAudio(): void {
    this.reproduciendoAudio = false;
    window.speechSynthesis.cancel();
  }

  formatearMoneda(valor: number): string {
    // Formato para Ecuador: separador de miles y decimales con coma
    return valor.toLocaleString('es-EC', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
  }
}