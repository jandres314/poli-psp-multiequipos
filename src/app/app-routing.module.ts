import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandejaSolicitudComponent } from './bandeja-solicitud/bandeja-solicitud.component';
import { HomeComponent } from './home/home.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    children: [
      { path: 'bandejaSolicitud', component: BandejaSolicitudComponent },
      { path: 'estadisticas', component: EstadisticasComponent },
      { path: 'home', component: HomeComponent },
      { path: '**', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
