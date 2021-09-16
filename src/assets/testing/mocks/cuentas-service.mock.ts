import { of } from 'rxjs';
import { LISTADO_CUENTAS_MOCK } from './data/cuentas.mock';

export class CuentasServiceMock {
    getCuentas() {
        return of(LISTADO_CUENTAS_MOCK);
      }
}
