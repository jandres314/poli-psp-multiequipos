import { Component, OnInit } from '@angular/core';
import getISOWeek from 'date-fns/getISOWeek';
import { GenericsService } from '../generics/generics.service';
import { Condiciones } from './model/condiciones';
import { ErrorHandlerRequestResponseService } from '../generics/error-handler-request-response.service';
import { Router } from '@angular/router';
import { ListasService } from 'src/app/generics/listas.service';
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


  constructor(
    private router: Router,
    private genericsService: GenericsService,
    private busquedaService: SolicitudService,
    private errorHandlerRequestResponseService: ErrorHandlerRequestResponseService,
    private listaService: ListasService) {
    this.genericsService.openBusqueda.subscribe(isVisible => {
      this.visible = isVisible;
    });
  }

  ngOnInit(): void {
    this.instanciarFiltros();
  }

  instanciarFiltros(): void {
    this.filtroNombreDispositivo = { campo: 'Nombre de dispositivo', operador: 'like', tipoDato: 'STRING' };
  }

  getDataList(keyList: string): any[] {
    return this.listaService.getList(keyList);
  }

  buscar(): void {
    this.setFiltrosBusqueda();
    if (this.filtroBusqueda.length > 0) {
      this.getSolicitudes();
    }
  }

  getSolicitudes(): void {
    this.showLoading();
    this.busquedaService.listaSolicitudes = this.busquedaService.consultarSolicitudes(this.filtroBusqueda);
    this.busquedaService.showTabla(true);
    this.hideLoading();
    this.close();
    this.router.navigate(['/bandejaSolicitud']);
  }

  setFiltrosBusqueda(): void {
    this.filtroBusqueda = [];
    if (this.filtroNombreDispositivo.valor) {
      this.filtroBusqueda.push(this.filtroNombreDispositivo);
    }
  }


  limpiarFiltros(): void {
    this.filtroBusqueda = [];
    this.filtroNombreDispositivo.valor = '';
  }

  showLoading(): void {
    this.isLoading = true;
  }

  hideLoading(): void {
    this.isLoading = false;
  }

  onChange(result: Date, tipoFecha: string): void {

  }

  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
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
