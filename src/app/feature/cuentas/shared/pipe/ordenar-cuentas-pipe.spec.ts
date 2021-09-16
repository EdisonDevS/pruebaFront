import { LISTADO_CUENTAS_MOCK, LISTADO_CUENTAS_ORDENADAS_MOCK } from '@testing/mocks/data/cuentas.mock';
import { OrdenarCuentasPipe } from './ordenar-cuentas.pipe';

describe('OrdenarCuentasPipe', () => {
  const pipe = new OrdenarCuentasPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('deberia ordenar las cuentas', () => {
    expect(pipe.transform(LISTADO_CUENTAS_MOCK))
        .toEqual(LISTADO_CUENTAS_ORDENADAS_MOCK);
  });

  it('si no se envian cuentas se retorna un array vacio', () => {
    expect(pipe.transform([]))
        .toEqual([]);
  });

});
