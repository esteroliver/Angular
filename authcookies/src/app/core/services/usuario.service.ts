import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { env } from '../env.dev';
import { IRegister } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private http = inject(HttpClient);
  private apiUrl = env.api + "/usuario";

  register(request: IRegister){
    return this.http.post(this.apiUrl + "/criar", request);
  }
}
