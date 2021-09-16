import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AUTH } from 'src/environments/environment';
import { AutenticacionService } from '../../shared/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private autenticacionService: AutenticacionService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(){
    this.autenticacionService.login(this.loginForm.value).subscribe(response => {
      localStorage.setItem(AUTH.token, response.access_token);
      this.redirectCuentas();
    });
  }

  redirectCuentas() {
    this.router.navigateByUrl('/cuentas');
  }

  get emailField() {
    return this.loginForm.get('email');
  }

  get passwordField() {
    return this.loginForm.get('password');
  }

  getCampoFormulario(nombreControl: string) {
    return this.loginForm.get(nombreControl);
  }
}
