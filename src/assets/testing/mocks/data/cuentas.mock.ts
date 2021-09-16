import { Cuenta } from '@shared/modelo/cuenta';

export const CUENTA_MOCK: Cuenta = {
    id: 4785,
    tipoCuenta: 'cuenta de ahorros',
    estado: 'inactivo',
    valorDisponible: 2514376
};

export const LISTADO_CUENTAS_MOCK: Cuenta[] = [
    {
        id: 1564,
        tipoCuenta: 'Visa',
        estado: 'activo',
        valorDisponible: 4162696
    },
    {
        id: 2956,
        tipoCuenta: 'cuenta corriente',
        estado: 'activo',
        valorDisponible: 3948440
    },
    {
        id: 3878,
        tipoCuenta: 'cuenta de ahorros',
        estado: 'inactivo',
        valorDisponible: 2449712
    },
    {
        id: 4785,
        tipoCuenta: 'cuenta de ahorros',
        estado: 'inactivo',
        valorDisponible: 2514376
    },
    {
        id: 7855,
        tipoCuenta: 'Mastercard',
        estado: 'activo',
        valorDisponible: 3997940
    }
];



export const LISTADO_CUENTAS_ORDENADAS_MOCK: Cuenta[] = [
    {
        id: 4785,
        tipoCuenta: 'cuenta de ahorros',
        estado: 'inactivo',
        valorDisponible: 2514376
    },
    {
        id: 3878,
        tipoCuenta: 'cuenta de ahorros',
        estado: 'inactivo',
        valorDisponible: 2449712
    },
    {
        id: 2956,
        tipoCuenta: 'cuenta corriente',
        estado: 'activo',
        valorDisponible: 3948440
    },
    {
        id: 1564,
        tipoCuenta: 'Visa',
        estado: 'activo',
        valorDisponible: 4162696
    },
    {
        id: 7855,
        tipoCuenta: 'Mastercard',
        estado: 'activo',
        valorDisponible: 3997940
    }
];
