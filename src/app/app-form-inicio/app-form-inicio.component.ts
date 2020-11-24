
import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { GenericsService } from '../generics/generics.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Mensajes } from '../constantes/mensajes';
import { SolicitudService } from './solicitud.service';
import { ErrorHandlerRequestResponseService } from '../generics/error-handler-request-response.service';
import { FormContractRequestConfig } from './../mocks/formContractRequestConfig';
import { ListasService } from 'src/app/generics/listas.service';
import { Utils } from '../utils/util';

@Component({
  selector: 'app-form-inicio',
  templateUrl: './app-form-inicio.component.html'
})
export class AppFormInicioComponent implements OnInit {

  confirmModal?: NzModalRef;
  isVisible = false;
  isLoading = false;
  contractRequest: FormGroup;
  listFormConfiguration: any[] = new Array();
  mensajeValidacion = '';
  textButton: string;
  mensaje = Mensajes.MESSAGE_HELP;
  currencyValue = '0';
  listaOpciones = [{clave : 'Si', valor: 'Si'}, {clave : 'No', valor: 'No'}];

  constructor(
    private utils: Utils,
    private modal: NzModalService,
    private fb: FormBuilder,
    private genericsService: GenericsService,
    private solicitudService: SolicitudService,
    private errorHandlerRequestResponseService: ErrorHandlerRequestResponseService,
    private listaService: ListasService) {
    this.genericsService.openSolicitud.subscribe(isVisible => {
      this.isVisible = isVisible;
    });
  }

  ngOnInit(): void {
    this.listFormConfiguration = FormContractRequestConfig.formConditionalFields;
    this.contractRequest = this.createFormGroup();
    this.changeTextButton(Mensajes.BUTTON_NEXT);
  }

  createFormGroup(): FormGroup {
    return this.fb.group({
      nombreDispositivo: this.fb.control('', Validators.required),
      valorAprobacion: this.fb.control('', Validators.required),
      estadoAprobacion: this.fb.control('', Validators.required),
      fechaAprobación: this.fb.control('', Validators.required),
      disponibles: this.fb.control('', Validators.required),
      comercial: this.fb.control('', Validators.required),
      comentarios: this.fb.control('', Validators.required),
      precio: this.fb.control('', Validators.required),
      requeridoPorCliente: this.fb.control('', Validators.required),
      diasInventario: this.fb.control('', Validators.required)
    });
  }

  showModal(decision: boolean): void {
    this.isVisible = decision;
  }

  handleCancel(): void {
    this.mensajeValidacion = '';
    this.showModal(false);
    this.showLoading(false);
  }

  showLoading(decision: boolean): void {
    this.isLoading = decision;
  }

  changeTextButton(textButton: string): void {
    this.textButton = textButton;
  }

  validateChange(fieldData: any): void {
    if (this.contractRequest.get(fieldData.fieldName).value &&
      this.contractRequest.get(fieldData.fieldName).value !== null) {
      let value = this.contractRequest.get(fieldData.fieldName).value;
      fieldData.valueLength = value.length;
      if (fieldData.type === 'currency') {
        value = value.toFixed(2);
        const regex = new RegExp('[$ .,]');
        this.currencyValue = value.replace(regex, '').length;
        fieldData.valueLength = this.currencyValue;
      }
    } else {
      fieldData.valueLength = 0;
      this.currencyValue = '0';
    }
  }

  getDataList(keyList: any): any[] {
    return this.listaService.getList(keyList);
  }

  validateOnlyNumbers(event: any, type: string): boolean {
    return this.utils.handlePreventKeys(event, type);
  }

  nextForm(): void {
    if (this.validateObligatory()) {
      this.saveRequest();
    }
  }

  validateObligatory(): boolean {
    let validationPass = false;
    let nameField = '';
    let valueField = '';

    for (let i = this.listFormConfiguration.length - 1; i >= 0; i--) {
      if (this.listFormConfiguration[i].obligatory) {
        nameField = this.listFormConfiguration[i].fieldName;
        valueField = this.contractRequest.value[nameField].toString();
        validationPass = valueField.length > 0 &&
          this.listFormConfiguration[i].messageMaxLengthValidation === false;
        this.listFormConfiguration[i].messageObligatoryValidation = validationPass ? false : true;
      }
    }
    return validationPass;
  }

  saveRequest(): void {
    this.showLoading(true);
    this.solicitudService.saveApplicant(this.contractRequest.value).then((response) => {
      this.endCreateApplicant(response);
    }).catch((error) => {
      this.errorHandlerRequestResponseService.launchError(error);
      this.endCreateApplicant(false);
    });
  }

  endCreateApplicant(success: boolean): void {
    this.changeTextButton(Mensajes.BUTTON_NEXT);
    this.showLoading(false);
    this.showModal(false);
    if (success) {
      this.showConfirm();
      this.contractRequest.reset();
    }
  }

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: '¡Solicitud generada!',
      nzContent: 'Exito',
      nzMaskStyle: {
        backgroundColor: 'rgba(0,0,0,0.6)'
      },
      nzMaskClosable: false,
      nzWrapClassName: 'modal__confirm',
      nzOnOk: () => {
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      }
    });
  }

}
