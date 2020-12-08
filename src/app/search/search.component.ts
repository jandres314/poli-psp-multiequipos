import { Component, OnInit } from '@angular/core';
import { GenericsService } from '../generics/generics.service';
import { Condiciones } from './model/condiciones';
import { Router } from '@angular/router';
import { SolicitudService } from '../app-form-inicio/solicitud.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  visible = false;
  date = null;
  dateRange = [];
  isEnglish = false;
  listaProceso: any[] = new Array();
  configuracionSubProceso: any[];
  listaSubProceso: any[] = new Array();
  listaTipoSolicitud: any[] = new Array();
  listaProfesional: any[] = new Array();
  listaEstado: any[] = new Array();
  isLoading = false;
  filtro: any = new Object();
  filtroBusqueda: Condiciones[] = [];

  filtroNombreDispositivo: Condiciones = new Condiciones();
  filtroDisponibles: Condiciones = new Condiciones();
  filtroPrecio: Condiciones = new Condiciones();


  constructor(
    private router: Router,
    private genericsService: GenericsService,
    private solicitudService: SolicitudService) {
    this.genericsService.openBusqueda.subscribe(isVisible => {
      this.visible = isVisible;
    });
  }

  ngOnInit(): void {
    this.instanciarFiltros();
  }

  instanciarFiltros(): void {
    this.filtroNombreDispositivo = { campo: 'nombreDispositivo', operador: 'like', tipoDato: 'STRING' };
    this.filtroDisponibles = { campo: 'disponibles', operador: 'mayorQue', tipoDato: 'NUMBER' };
    this.filtroPrecio = { campo: 'precio', operador: 'mayorQue', tipoDato: 'NUMBER' };
  }

  buscar(): void {
    this.setFiltrosBusqueda();
    if (this.filtroBusqueda.length > 0) {
      this.getSolicitudes();
    }
  }

  getSolicitudes(): void {
    this.showLoading();
    this.solicitudService.showTabla(true);
    this.hideLoading();
    this.close();
    this.router.navigate(['/bandejaSolicitud']);
    this.solicitudService.consultarSolicitudes(this.filtroBusqueda);
  }

  setFiltrosBusqueda(): void {
    this.filtroBusqueda = [];
    if (this.filtroNombreDispositivo.valor) {
      this.filtroBusqueda.push(this.filtroNombreDispositivo);
    }
    if (this.filtroDisponibles.valor) {
      this.filtroBusqueda.push(this.filtroDisponibles);
    }
    if (this.filtroPrecio.valor) {
      this.filtroBusqueda.push(this.filtroPrecio);
    }
  }

  limpiarFiltros(): void {
    this.filtroBusqueda = [];
    this.filtroNombreDispositivo.valor = '';
    this.filtroDisponibles.valor = '';
    this.filtroPrecio.valor = '';
  }

  showLoading(): void {
    this.isLoading = true;
  }

  hideLoading(): void {
    this.isLoading = false;
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    if (!this.isLoading) {
      this.visible = false;
    }
  }
}
