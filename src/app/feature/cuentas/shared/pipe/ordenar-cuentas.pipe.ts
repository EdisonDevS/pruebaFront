import { Pipe, PipeTransform } from '@angular/core';
import { Cuenta } from '@shared/modelo/cuenta';

@Pipe({
  name: 'ordenarCuentas'
})
export class OrdenarCuentasPipe implements PipeTransform {

  transform(cuentas: Cuenta[]): Cuenta[] {
    if (!cuentas) {
      return [];
    }
    const ahorros = cuentas.filter(item => item.tipoCuenta === 'cuenta de ahorros').sort((a, b) => b.valorDisponible - a.valorDisponible);
    const corrientes = cuentas.filter(item => item.tipoCuenta === 'cuenta corriente').sort((a, b) => b.valorDisponible - a.valorDisponible);
    const credito = cuentas.filter(
      item => item.tipoCuenta !== 'cuenta corriente' && item.tipoCuenta !== 'cuenta de ahorros'
      ).sort((a, b) => b.valorDisponible - a.valorDisponible);

    return [...ahorros, ...corrientes, ...credito];
  }

}
