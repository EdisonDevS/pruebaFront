import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { CUENTA_MOCK } from '@testing/mocks/data/cuentas.mock';
import { of } from 'rxjs';

import { SharedCuentaService } from './shared-cuenta.service';

describe('SharedCuentaServiceService', () => {
  let service: SharedCuentaService;
  let http: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService, SharedCuentaService]
    });
    service = TestBed.inject(SharedCuentaService);
    http = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe retornar un observable de tipo Cuenta', () => {
    const spyDoGet = spyOn(http, 'doGet')
    .and.callThrough()
    .and.returnValue(of(CUENTA_MOCK));

    service.getCuentaById(null).subscribe(res => {
      expect(res).toBe(CUENTA_MOCK);
    });

    expect(spyDoGet).toHaveBeenCalled();
  });
});
