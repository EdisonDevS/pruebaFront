import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AUTH } from 'src/environments/environment';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {


  constructor(
    private location: Location,
    private readonly router: Router
    ) { }

  volver() {
    this.location.back();
  }

  logout() {
    localStorage.removeItem(AUTH.token);
    this.router.navigateByUrl('/autenticacion/login');
  }

}
