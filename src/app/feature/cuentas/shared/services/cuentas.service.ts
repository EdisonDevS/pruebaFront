import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Cuenta } from '@shared/modelo/cuenta';

@Injectable()
export class CuentasService {

  constructor(private httpService: HttpService) { }

  getCuentas() {
    return this.httpService.doGet<Cuenta[]>('/c48dcfd9-216a-4243-b72a-31c085157cf1');
  }
}
