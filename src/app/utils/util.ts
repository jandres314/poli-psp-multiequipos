export class Utils {

  constructor() { }

  handlePreventKeys = (event: any, typeValidation: any) => {
    const pattNum = typeValidation === 'number'
      ? new RegExp('^0$|^[1-9]{1}[\\d]{0,}$') : new RegExp('^s*([0-9a-zA-Z ]+)*$');
    if (!pattNum.test(event.key)) {
      return false;
    }
  }

}
