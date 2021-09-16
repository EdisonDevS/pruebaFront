import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { LISTADO_CUENTAS_MOCK } from '@testing/mocks/data/cuentas.mock';
import { of } from 'rxjs';
import { CuentasService } from './cuentas.service';

describe('CuentasService', () => {
  let service: CuentasService;
  let http: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpService,
        CuentasService
      ]
    });
    service = TestBed.inject(CuentasService);
    http = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería retornar un observable del tipo Cuenta[]', () => {
    const spyDoGet = spyOn(http, 'doGet')
    .and.callThrough()
    .and.returnValue(of(LISTADO_CUENTAS_MOCK));

    service.getCuentas().subscribe(res => {
      expect(res).toBe(LISTADO_CUENTAS_MOCK);
    });

    expect(spyDoGet).toHaveBeenCalled();
  });
});
