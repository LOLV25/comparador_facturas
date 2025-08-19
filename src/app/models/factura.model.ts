export interface Producto {
  nombre: string;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}

export interface Factura {
  id: string;
  numero: string;
  ruc: string;
  proveedor: string;
  fechaEmision: string;
  fechaGeneracion?: string;
  modeloIA?: string;
  productos: Producto[];
  subtotal: number;
  iva: number;
  total: number;
  resumen?: string;
}