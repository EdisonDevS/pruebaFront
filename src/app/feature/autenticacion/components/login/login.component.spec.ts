import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AutenticacionServiceMock } from '@testing/mocks/autenticacion-service.mock';
import { AUTH } from 'src/environments/environment';
import { AutenticacionService } from '../../shared/autenticacion.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let autenticacionService: AutenticacionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [
        {provide: AutenticacionService, useClass: AutenticacionServiceMock}
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    autenticacionService = TestBed.inject(AutenticacionService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia crear el formulario', () => {
    expect(component.loginForm.value).toEqual({
      email: '',
      password: ''
    });
  });

  it('form invalido', () => {
    let form = {
      email: '',
      password: ''
    };

    component.loginForm.patchValue(form);
    expect(component.loginForm.get('email').hasError('required')).toBeTrue();
    expect(component.loginForm.get('password').hasError('required')).toBeTrue();

    form = {
      email: 'pepito',
      password: ''
    };

    component.loginForm.patchValue(form);
    expect(component.loginForm.get('email').hasError('email')).toBeTrue();

    form = {
      email: '',
      password: '12345'
    };

    component.loginForm.patchValue(form);
    expect(component.loginForm.get('password').hasError('minlength')).toBeTrue();

    form = {
      email: 'pepito@gmail.com',
      password: '123456'
    };

    component.loginForm.patchValue(form);
    expect(component.loginForm.valid).toBeTrue();
  });

  it('llama al servicio de login, guarda en el localstorage y redirecciona', () => {
    const spyLogin = spyOn(autenticacionService, 'login').and.callThrough();
    const spyRedirect = spyOn((component as any).router, 'navigateByUrl').and.returnValue(true);

    let token: string;

    autenticacionService.login(null).subscribe(res => {
      token = res.access_token;
    });

    component.login();

    expect(spyLogin).toHaveBeenCalled();
    expect(spyRedirect).toHaveBeenCalledWith('/cuentas');
    expect(localStorage.getItem(AUTH.token)).toBe(token);
  });
});
