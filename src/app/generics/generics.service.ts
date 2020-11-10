import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericsService {

  constructor() { }

  public openSolicitud = new Subject<boolean>();
  public openBusqueda = new Subject<boolean>();

  showSolicitud(isVisible): void {
    this.openSolicitud.next(isVisible);
  }

  showBusqueda(isVisible): void {
    this.openBusqueda.next(isVisible);
  }
}
