import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { AsideComponent } from './aside/aside.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { Utils } from './utils/util';
import { GenericsService } from './generics/generics.service';
import { ErrorHandlerRequestResponseService } from './generics/error-handler-request-response.service';
import { ModalErrorComponent } from './modal-error/modal-error.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ListasService } from './generics/listas.service';

import { LoadingComponent } from './loading/loading.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { HeaderComponent } from './header/header.component';
import { AppFormInicioComponent } from './app-form-inicio/app-form-inicio.component';
import { BandejaSolicitudComponent } from './bandeja-solicitud/bandeja-solicitud.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    ModalErrorComponent,
    LoadingComponent,
    HeaderComponent,
    AppFormInicioComponent,
    BandejaSolicitudComponent,
    SearchComponent,
    HomeComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzMenuModule,
    NzFormModule,
    NzGridModule,
    NzSelectModule,
    NzModalModule,
    NzSwitchModule,
    NzInputModule,
    NzButtonModule,
    NzDrawerModule,
    NzDatePickerModule,
    NzRadioModule,
    NzTableModule,
    NzPaginationModule,
    NzCollapseModule,
    NzCheckboxModule,
    NzToolTipModule,
    NzPopoverModule,
    NzTabsModule,
    NzSpinModule,
    NzIconModule,
    NzStepsModule,
    NzCardModule,
    NzNotificationModule,
    NgxWebstorageModule.forRoot(),
    CurrencyMaskModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES },
    GenericsService,
    ErrorHandlerRequestResponseService,
    ListasService,
    Utils
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
