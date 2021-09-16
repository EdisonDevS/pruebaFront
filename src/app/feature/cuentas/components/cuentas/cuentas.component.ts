import { Component, OnInit } from '@angular/core';
import { Cuenta } from '@shared/modelo/cuenta';
import { Observable } from 'rxjs';
import { CuentasService } from '../../shared/services/cuentas.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {

  cuentas$: Observable<Cuenta[]>;

  constructor(private cuentasService: CuentasService) {}

  ngOnInit(): void {
    this.cuentas$ = this.cuentasService.getCuentas();
  }



}
