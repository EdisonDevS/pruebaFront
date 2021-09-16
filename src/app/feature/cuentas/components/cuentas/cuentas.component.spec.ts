import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuentasServiceMock } from '@testing/mocks/cuentas-service.mock';
import { OrdenarCuentasPipe } from '../../shared/pipe/ordenar-cuentas.pipe';
import { CuentasService } from '../../shared/services/cuentas.service';

import { CuentasComponent } from './cuentas.component';

describe('CuentasComponent', () => {
  let component: CuentasComponent;
  let fixture: ComponentFixture<CuentasComponent>;
  let cuentasService: CuentasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasComponent, OrdenarCuentasPipe ],
      providers: [
        {provide: CuentasService, useClass: CuentasServiceMock}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasComponent);
    cuentasService = TestBed.inject(CuentasService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe llamar al servicion de cuentas para solicitar el listado', () => {
    const spyCuentas = spyOn(cuentasService, 'getCuentas')
    .and.callThrough();

    component.ngOnInit();

    expect(spyCuentas).toHaveBeenCalled();
  });
});
