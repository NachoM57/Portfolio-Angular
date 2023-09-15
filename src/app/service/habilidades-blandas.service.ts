import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HabilidadesBlandas } from '../model/habilidades-blandas';
import { environment } from 'src/environments/environment';

const urlBase = environment.apiURL;


@Injectable({
  providedIn: 'root'
})
export class HabilidadesBlandasService {
  habiURL = `${urlBase}/habilidadblanda`;

  constructor(private http: HttpClient) { }

  public lista(): Observable<HabilidadesBlandas[]> {
    return this.http.get<HabilidadesBlandas[]>(this.habiURL + '/ver');

  }

  public buscar(id: number): Observable<HabilidadesBlandas> {
    return this.http.get<HabilidadesBlandas>(this.habiURL + `/buscar/${id}`)
  }

  public crear(habilidad: HabilidadesBlandas): Observable<any> {
    return this.http.post<any>(this.habiURL + '/nueva', habilidad);
  }


  public editar(id: number, habilidad: HabilidadesBlandas): Observable<any> {
    return this.http.put<any>(this.habiURL + `/editar/${id}`, habilidad);
  }

  public borrar(id: number): Observable<any> {
    return this.http.delete<any>(this.habiURL + `/borrar/${id}`);
  }

}
