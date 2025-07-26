import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class Factura {
  private apiUrl = 'http://localhost:3000/api/facturas'; // Ajusta la URL a tu backend
  constructor(private http: HttpClient) { }
  obtenerFactura(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
}
}