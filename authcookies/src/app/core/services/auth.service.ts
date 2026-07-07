import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { env } from '../env.dev';
import { ILogin, ITokenResponse } from '../models/auth';
import { catchError, firstValueFrom, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = env.api + "/auth";

  accessToken  : string | null = null;

  login(request: ILogin) : Observable<ITokenResponse>{
    return this.http.post<ITokenResponse>(
      this.apiUrl + "/login",
      request,
      { withCredentials: true }
    ).pipe(
      tap((response: ITokenResponse) => this.setarSessao(response))
    );
  }

  refresh() : Observable<ITokenResponse>{
    return this.http.post<ITokenResponse>(this.apiUrl + "/refresh", {}, { withCredentials: true });
  }

  logout() : Observable<void>{
    return this.http.post<void>(this.apiUrl + "/logout", {}, { withCredentials: true });
  }

  restaurarSessao() : Promise<void>{
    return firstValueFrom(this.refresh().pipe(
      tap((response: ITokenResponse) => {
        this.setarSessao(response);
      }),
      catchError(() => {
        this.accessToken = null;
        return of(null);
      })
    ))
    .then(() => void 0);
  }

  usuarioEstaAutenticado(){
    return this.getAccessToken() !== null;
  }

  getAccessToken(){
    return this.accessToken;
  }

  private setarSessao(response: ITokenResponse){
    this.accessToken = response.token;
  }
}
