import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';
import { environment } from 'src/environments/environment';

const urlBase = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  proURL = `${urlBase}/proyecto`;

  constructor(private http: HttpClient) { }

  public lista(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.proURL + '/ver');

  }

  public buscar(id: number): Observable<Proyectos> {
    return this.http.get<Proyectos>(this.proURL + `/buscar/${id}`)
  }

  public crear(proyectos: Proyectos): Observable<any> {
    return this.http.post<any>(this.proURL + '/nueva', proyectos);
  }


  public editar(id: number, proyectos: Proyectos): Observable<any> {
    return this.http.put<any>(this.proURL + `/editar/${id}`, proyectos);
  }

  public borrar(id: number): Observable<any> {
    return this.http.delete<any>(this.proURL + `/borrar/${id}`);
  }

}
