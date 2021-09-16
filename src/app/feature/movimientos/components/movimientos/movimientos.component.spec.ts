import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedCuentaService } from '@shared/services/shared-cuenta.service';
import { MovimientosServiceMock } from '@testing/mocks/movimientos-service.mock';
import { SharedCuentaServiceMock } from '@testing/mocks/shared-cuenta-service.mock';
import { MovimientosService } from '../../shared/services/movimientos.service';

import { MovimientosComponent } from './movimientos.component';

describe('MovimientosComponent', () => {
  let component: MovimientosComponent;
  let fixture: ComponentFixture<MovimientosComponent>;
  let sharedCuentaService: SharedCuentaService;
  let movimientosService: MovimientosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientosComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: MovimientosService, useClass: MovimientosServiceMock},
        {provide: SharedCuentaService, useClass: SharedCuentaServiceMock}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientosComponent);
    sharedCuentaService = TestBed.inject(SharedCuentaService);
    movimientosService = TestBed.inject(MovimientosService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe llamar al servicio de cuentas para solicitar la cuenta', () => {
    const spyCuentas = spyOn(sharedCuentaService, 'getCuentaById')
    .and.callThrough();

    component.ngOnInit();

    expect(spyCuentas).toHaveBeenCalled();
  });

  it('debe llamar al servicio de movimientos para solicitar los movimientos', () => {
    const spyCuentas = spyOn(movimientosService, 'getMovimientosCuenta')
    .and.callThrough();

    component.ngOnInit();

    expect(spyCuentas).toHaveBeenCalled();
  });
});
