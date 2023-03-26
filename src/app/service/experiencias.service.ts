import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencias } from '../model/experiencias';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {
expURL = 'https://backendnacho.onrender.com/experiencia'
  
  constructor(private httpclient: HttpClient) { }

  public lista(): Observable<Experiencias[]>{
   return this.httpclient.get<Experiencias[]>(this.expURL + '/ver');
 
  }

  public buscar(id: number): Observable<Experiencias>{
    return this.httpclient.get<Experiencias>(this.expURL + `/buscar/${id}`)
  }

  public crear(experiencias:Experiencias): Observable<any>{
  return this.httpclient.post<any>(this.expURL + '/nueva', experiencias);
}


public editar(id: number, experiencias: Experiencias): Observable<any>{
  return this.httpclient.put<any>(this.expURL + `/editar/${id}`, experiencias);
}

public borrar(id: number): Observable<any>{
  return this.httpclient.delete<any>(this.expURL + `/borrar/${id}`);
}

}