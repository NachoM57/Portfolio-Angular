import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../model/estudios';
import {environment} from 'src/environments/environment';

const urlBase = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
  estURL = `${urlBase}/estudios`;
  
  constructor(private httpclient: HttpClient) { }

  public lista(): Observable<Estudios[]>{
   return this.httpclient.get<Estudios[]>(this.estURL + '/ver');
 
  }

  public buscar(id: number): Observable<Estudios>{
    return this.httpclient.get<Estudios>(this.estURL + `/buscar/${id}`)
  }

  public crear(estudios:Estudios): Observable<any>{
  return this.httpclient.post<any>(this.estURL + '/nueva', estudios);
}


public editar(id: number, estudios: Estudios): Observable<any>{
  return this.httpclient.put<any>(this.estURL + `/editar/${id}`, estudios);
}

public borrar(id: number): Observable<any>{
  return this.httpclient.delete<any>(this.estURL + `/borrar/${id}`);
}

}
