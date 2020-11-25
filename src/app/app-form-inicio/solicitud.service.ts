import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Condiciones } from '../search/model/condiciones';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  isData = new Subject<boolean>();
  listaSolicitudes: any[];
  private solicitudes: any[] = [];

  constructor() { }

  saveApplicant(data: any): Promise<any> {
    this.solicitudes.push(data);
    return Promise.resolve(true);
  }

  consultarSolicitudes(filtro: Condiciones[]): any[] {
    return [];
  }

  showTabla(isChange): void {
    this.isData.next(isChange);
  }

}
