import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import { AutenticacionService } from './shared/autenticacion.service';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    FlexLayoutModule,
    SharedModule,
    AutenticacionRoutingModule
  ],
  providers: [
    AutenticacionService
  ]
})
export class AutenticacionModule { }
