import { Component, OnInit } from '@angular/core';
import { GenericsService } from '../generics/generics.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private genericsService: GenericsService) { }

  ngOnInit(): void {
  }

  abrirBusqueda(): void {
    console.log('abrir busqueda');
    this.genericsService.showBusqueda(true);
    }

}
