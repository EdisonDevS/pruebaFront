import { Usuario } from '@shared/modelo/usuario';
import { of } from 'rxjs';
import { ACCESS_TOKEN_MOCK } from './data/access_token.mock';

export class AutenticacionServiceMock {
    login(data: Partial<Usuario>) {
        console.log(data);
        return of(ACCESS_TOKEN_MOCK);
    }
}
