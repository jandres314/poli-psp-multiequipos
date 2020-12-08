import { Component, OnInit } from '@angular/core';
import { GenericsService } from '../generics/generics.service';
import { ErrorHandlerRequestResponseService } from '../generics/error-handler-request-response.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {

  constructor(
    private genericsService: GenericsService
    ) { }

  nuevaSolicitud(): void {
    this.genericsService.showSolicitud(true);
  }

  abrirBusqueda(): void {
    this.genericsService.showBusqueda(true);
  }

}
