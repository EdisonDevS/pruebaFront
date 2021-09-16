import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { GuestGuard } from '@core/guards/guest.guard';


const routes: Routes = [
  {
    path: 'autenticacion',
    loadChildren: () => import('./feature/autenticacion/autenticacion.module').then(mod => mod.AutenticacionModule),
    canActivate: [GuestGuard]
  },
  {
    path: 'cuentas',
    loadChildren: () => import('./feature/cuentas/cuentas.module').then(mod => mod.CuentasModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'movimientos',
    loadChildren: () => import('./feature/movimientos/movimientos.module').then(mod => mod.MovimientosModule),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'autenticacion' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
