import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HabilidadesDuras } from '../model/habilidades-duras';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesDurasService {
  habURL = 'http://localhost:8080/habilidaddura'
  
  constructor(private http: HttpClient) { }

  public lista(): Observable<HabilidadesDuras[]>{
   return this.http.get<HabilidadesDuras[]>(this.habURL + '/ver');
 
  }

  public buscar(id: number): Observable<HabilidadesDuras>{
    return this.http.get<HabilidadesDuras>(this.habURL + `/buscar/${id}`)
  }

  public crear(habilidad:HabilidadesDuras): Observable<any>{
  return this.http.post<any>(this.habURL + '/nueva', habilidad);
}


public editar(id: number, habilidad: HabilidadesDuras): Observable<any>{
  return this.http.put<any>(this.habURL + `/editar/${id}`, habilidad);
}

public borrar(id: number): Observable<any>{
  return this.http.delete<any>(this.habURL + `/borrar/${id}`);
}

}
