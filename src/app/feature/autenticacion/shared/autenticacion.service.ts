import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Usuario } from '@shared/modelo/usuario';

@Injectable()
export class AutenticacionService {

  constructor(
    private httpService: HttpService
  ) { }

  login(data: Partial<Usuario>) {
    console.log(data);
    return this.httpService.doGet<{ access_token: string }>('/0820ac6c-6130-4a5a-b3b2-ca95a56d3ad9');
  }

}
