import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Cuenta } from '@shared/modelo/cuenta';

@Injectable({
  providedIn: 'root'
})
export class SharedCuentaService {

  constructor(
    private httpService: HttpService
  ) { }

  getCuentaById(cuentaId: string) {
    console.log(cuentaId);
    return this.httpService.doGet<Cuenta>(`/e14ce96a-0026-4da0-b597-61add933dbc2`);
  }
}
