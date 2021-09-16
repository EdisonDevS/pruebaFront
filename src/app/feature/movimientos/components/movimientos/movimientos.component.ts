import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cuenta } from '@shared/modelo/cuenta';
import { Movimiento } from '@shared/modelo/movimiento';
import { SharedCuentaService } from '@shared/services/shared-cuenta.service';
import { Observable } from 'rxjs';
import { MovimientosService } from '../../shared/services/movimientos.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.scss']
})
export class MovimientosComponent implements OnInit {

  cuentaId: string;

  cuenta$: Observable<Cuenta>;
  movimientos$: Observable<Movimiento[]>;

  constructor(
    private route: ActivatedRoute,
    private sharedCuentaService: SharedCuentaService,
    private movimientosService: MovimientosService
    ) {
      this.cuentaId = this.route.snapshot.params.cuentaId;
    }

  ngOnInit() {
    this.cuenta$ = this.sharedCuentaService.getCuentaById(this.cuentaId);
    this.movimientos$ = this.movimientosService.getMovimientosCuenta(this.cuentaId);
  }

}
