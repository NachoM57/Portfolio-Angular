import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../model/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
banURL = 'https://backendnacho.onrender.com/banner'
  
  constructor(private http: HttpClient) { }

  public lista(): Observable<Banner[]>{
   return this.http.get<Banner[]>(this.banURL + '/ver');
 
  }

  public buscar(id: number): Observable<Banner>{
    return this.http.get<Banner>(this.banURL + `/buscar/${id}`)
  }

  public crear(banner:Banner): Observable<any>{
  return this.http.post<any>(this.banURL + '/nueva', banner);
}


public editar(id: number, banner: Banner): Observable<any>{
  return this.http.put<any>(this.banURL + `/editar/${id}`, banner);
}

public borrar(id: number): Observable<any>{
  return this.http.delete<any>(this.banURL + `/borrar/${id}`);
}

}