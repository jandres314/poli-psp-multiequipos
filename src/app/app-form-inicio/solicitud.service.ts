import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private solicitudes: any[] = [];

  constructor() { }

  saveApplicant(data: any): Promise<any> {
    this.solicitudes.push(data);
    return Promise.resolve(true);
  }

}
