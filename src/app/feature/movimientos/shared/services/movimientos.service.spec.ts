import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { LISTADO_MOVIMIENTOS_MOCK } from '@testing/mocks/data/movimiento.mock';
import { of } from 'rxjs';

import { MovimientosService } from './movimientos.service';

describe('CuentasService', () => {
  let service: MovimientosService;
  let http: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService, MovimientosService]
    });
    service = TestBed.inject(MovimientosService);
    http = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe retornar un observable de tipo Movimiento[]', () => {
    const spyDoGet = spyOn(http, 'doGet')
    .and.callThrough()
    .and.returnValue(of(LISTADO_MOVIMIENTOS_MOCK));

    service.getMovimientosCuenta(null).subscribe(res => {
      expect(res).toBe(LISTADO_MOVIMIENTOS_MOCK);
    });

    expect(spyDoGet).toHaveBeenCalled();
  });
});
