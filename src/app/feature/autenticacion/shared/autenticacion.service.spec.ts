import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { ACCESS_TOKEN_MOCK } from '@testing/mocks/data/access_token.mock';
import { of } from 'rxjs';

import { AutenticacionService } from './autenticacion.service';

describe('AutenticacionService', () => {
  let service: AutenticacionService;
  let http: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService, AutenticacionService]
    });
    service = TestBed.inject(AutenticacionService);
    http = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe retornar un objeto del tipo { access_token: string }', () => {
    const spyDoGet = spyOn(http, 'doGet')
    .and.callThrough()
    .and.returnValue(of(ACCESS_TOKEN_MOCK));

    service.login(null).subscribe(res => {
      expect(res).toBe(ACCESS_TOKEN_MOCK);
    });

    expect(spyDoGet).toHaveBeenCalled();
  });
});
