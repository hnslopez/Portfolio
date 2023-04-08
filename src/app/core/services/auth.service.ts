import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AccessData } from '../models/accessData.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private hostUrl: string;

  constructor(
    private configService: ConfigService,
    private http: HttpClient,

  ) {
    this.hostUrl = this.configService.getAPIUrl();
  }

  /**
   * Envia un metodod POST al servidor para auntenticar al usuario enviando credenciales.
   * 
   * @param username El username del usuario para la autenticación.
   * @param password La contraseña del usuario para la autenticación.
   * @returns Un observable que emite un object 'AccessData' que contiene el token de acceso y otros datos.
   */
  login(username: string, password: string): Observable<AccessData> {
    const body = {
      grant_type: 'password',
      username,
      password,
    };
    const url = `${this.hostUrl}auth/login`;
    const options = { withCredentials: true };
    return this.http.post<AccessData>(url, body, options);
  }

  /**
   * Envia un meotod Get al servidor para cerrar sesión del usuario.
   * 
   * @returns Un observable que no emite nada al finalizar.
   */
  logout(): Observable<void> {
    const url = `${this.hostUrl}auth/v2/logout`;
    const options = { withCredentials: true };
    return this.http.get<void>(url, options);
  }

  refreshToken(): Observable<AccessData> {
    return this.http.post<AccessData>(`${this.hostUrl}auth/refresh_token`, null, { withCredentials: true });
  }


}

