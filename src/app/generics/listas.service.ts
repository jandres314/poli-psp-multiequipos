
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ListasMock } from '../mocks/listas-mock';

@Injectable()
export class ListasService {

  listas: any = ListasMock;

  constructor() {
  }

  getList(keyList): any[] {
    return this.listas[keyList] || new Array();
  }


  getListDependency(valor: string, keyList: string): any[] {
    let listaValores: any[] = new Array();
    const listaCampo: any[] = this.listas[keyList];
    if (listaCampo && listaCampo.length > 0) {
      const configValue = listaCampo.find((valueConfig: any) => {
        return valueConfig.dependencia === valor;
      });
      if (configValue) {
        listaValores = configValue.valores;
      }
    }
    return listaValores;
  }
}
