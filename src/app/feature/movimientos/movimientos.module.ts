import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { MovimientosRoutingModule } from './movimientos-routing.module';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@shared/shared.module';
import { MovimientosService } from './shared/services/movimientos.service';



@NgModule({
  declarations: [
    MovimientosComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MovimientosRoutingModule
  ],
  providers: [
    MovimientosService
  ]
})
export class MovimientosModule { }
