import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { environment } from 'src/environments/environment';

const urlBase = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = `${urlBase}/auth`;

  constructor(private httpClient: HttpClient) { }


  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.URL + '/login', loginUsuario)
  }
}