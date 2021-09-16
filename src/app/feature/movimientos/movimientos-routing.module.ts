import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '@core/components/layout/layout.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: ':cuentaId', component: MovimientosComponent },
      { path: '**', redirectTo: 'login' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimientosRoutingModule { }
