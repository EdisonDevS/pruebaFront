import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@shared/shared.module';
import { CuentasRoutingModule } from './cuentas-routing.module';
import { CuentaCardComponent } from './components/cuenta-card/cuenta-card.component';
import { CuentasService } from './shared/services/cuentas.service';
import { OrdenarCuentasPipe } from './shared/pipe/ordenar-cuentas.pipe';



@NgModule({
  declarations: [
    CuentasComponent,
    CuentaCardComponent,
    OrdenarCuentasPipe
  ],
  imports: [
    CommonModule,
    CuentasRoutingModule,
    FlexLayoutModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    CuentasService,

  ]
})
export class CuentasModule { }
