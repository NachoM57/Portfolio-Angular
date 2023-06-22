import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';
import {environment} from 'src/environments/environment';

const urlBase = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL = `${urlBase}/habilidaddura`;
  
  constructor(private http: HttpClient) { }

  public lista(): Observable<Persona[]>{
   return this.http.get<Persona[]>(this.URL + '/ver');
 
  }

  public buscar(id: number): Observable<Persona>{
    return this.http.get<Persona>(this.URL + `/buscar/${id}`)
  }

  public crear(persona:Persona): Observable<any>{
  return this.http.post<any>(this.URL + '/nueva', persona);
}


public editar(id: number, persona: Persona): Observable<any>{
  return this.http.put<any>(this.URL + `/editar/${id}`, persona);
}

public borrar(id: number): Observable<any>{
  return this.http.delete<any>(this.URL + `/borrar/${id}`);
}

}