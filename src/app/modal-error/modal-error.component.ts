import { Component } from '@angular/core';
import { ErrorHandlerRequestResponseService } from '../generics/error-handler-request-response.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html'
})
export class ModalErrorComponent {

  errorGeneral: any = new Object();
  mensaje = '';
  mostrarMsg = false;
  isOpenModal = false;
  isOpenAlert = false;
  errorModal?: NzModalRef;
  infoModal?: NzModalRef;

  constructor(private errorHandlerRequestResponseService: ErrorHandlerRequestResponseService,
    private modal: NzModalService) {
    this.errorHandlerRequestResponseService.errorResponseSubject.subscribe((value: any) => {
      if (value && this.checkErrorJSON(value)) {
        this.errorGeneral = value.error;
      }
      this.showErrorModal();
    });

    this.errorHandlerRequestResponseService.errorNotificationResponseSubject.subscribe((value: any) => {
      this.mensaje = '';
      this.mostrarMsg = false;
      if (value && this.checkErrorJSON(value)) {
        this.errorGeneral = value.error;
        this.showNotification();
      } else {
        this.showErrorModal();
      }
    });
  }

  checkErrorJSON(response): boolean {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return true;
    } else {
      return false;
    }
  }

  showErrorModal(): void {

    this.errorModal = this.modal.error({
      nzTitle: this.errorGeneral.msg?.titulo || 'Los sentimos, ocurrió un error inesperado',
      nzContent: this.errorGeneral.msg?.descripcion,
      nzMaskStyle: {
        backgroundColor: 'rgba(0,0,0,0.6)'
      },
      nzMaskClosable: false,
      nzWrapClassName: 'modal__error',
      nzOkType:"primary",
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'))
    });
  }

  showNotification(): void {
    this.errorModal = this.modal.info({
      nzContent: this.errorGeneral.msg?.descripcion || 'Los sentimos, ocurrió un error inesperado',
      nzMaskStyle: {
        backgroundColor: 'rgba(0,0,0,0.6)'
      },
      nzMaskClosable: false,
      nzWrapClassName: 'modal__error',
      nzOkType:"primary",
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'))
    });
  }
}
