import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../app-form-inicio/solicitud.service';
import {BandejaBusquedaSolicitudes} from '../mocks/bandeja-busqueda-solicitudes';

@Component({
  selector: 'app-bandeja-solicitud',
  templateUrl: './bandeja-solicitud.component.html',
  styleUrls: ['./bandeja-solicitud.component.scss']
})
export class BandejaSolicitudComponent implements OnInit {

  configuracionBandeja: any;
  configuracionColumnas: any[];

  listOfColumns: any[] = new Array();
  listOfData: any[];

  constructor(private solicitudService: SolicitudService) {
    this.solicitudService.listaSolicitudes.subscribe(data => {
      this.listOfData = data;
    });
   }

  ngOnInit(): void {
    this.configuracionBandeja = BandejaBusquedaSolicitudes;
    this.configurarColumnas();
  }

  configurarColumnas(): void {
    this.configuracionColumnas = this.configuracionBandeja.columnas;
    if (this.configuracionColumnas && this.configuracionColumnas.length > 0) {
      this.configuracionColumnas.forEach(elemento => {

        if (elemento) {
          const columna: any = {};
          columna.nombre = elemento.nombre;
          columna.tipo = elemento.tipo;
          columna.label = elemento.label;
          this.listOfColumns.push(columna);
        }
      });
    }
  }

  eliminarRegistro(id: number): void {
    this.solicitudService.eliminarSolicitud(id);
    this.listOfData = this.listOfData.filter(value => {
      return value.id !== id;
    });
  }

}
