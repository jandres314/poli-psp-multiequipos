import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../app-form-inicio/solicitud.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {

  cantidadElementos = 0;

  constructor(private solicitudService: SolicitudService) { }

  ngOnInit(): void {
    this.cantidadElementos = this.solicitudService.contarElementos();
  }

}
