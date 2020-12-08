import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Condiciones } from '../search/model/condiciones';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private static id = 0;
  private solicitudes: any[] = [];
  resultadoBusquedaSolicitudes: any[] = [];
  isData = new Subject<boolean>();

  constructor() { }

  saveApplicant(data: any): Promise<any> {
    data.id = ++SolicitudService.id;
    this.solicitudes.push(data);
    return Promise.resolve(true);
  }

  consultarSolicitudes(filtro: Condiciones[]): void {
    this.resultadoBusquedaSolicitudes = this.solicitudes.filter(value => {
      return true;
    });
  }

  showTabla(isChange): void {
    this.isData.next(isChange);
  }

  eliminarSolicitud(id: number): void {
    this.solicitudes = this.solicitudes.filter(value => {
      return value.id !== id;
    });
  }

  contarElementos(): number {
    return this.solicitudes.length;
  }

}
