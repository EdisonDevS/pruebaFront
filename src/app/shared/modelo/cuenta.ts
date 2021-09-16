import { Movimiento } from './movimiento';

export interface Cuenta {
    id: number;
    tipoCuenta: string;
    estado: string;
    valorDisponible: number;
    movimientos?: Movimiento;
}
