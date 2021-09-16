import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Movimiento } from '@shared/modelo/movimiento';

@Injectable()
export class MovimientosService {

  constructor(private httpService: HttpService) { }

  getMovimientosCuenta(cuentaId: string) {
    console.log(cuentaId);
    return this.httpService.doGet<Movimiento[]>(`/4a432043-b759-4bef-bce0-fdfb126c320d`);
  }
}
