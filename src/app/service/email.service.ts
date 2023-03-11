import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../model/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  emURL = 'http://localhost:8080/email'
  
  constructor(private http: HttpClient) { }

  public lista(): Observable<Email[]>{
   return this.http.get<Email[]>(this.emURL + '/ver');
 
  }

  public buscar(id: number): Observable<Email>{
    return this.http.get<Email>(this.emURL + `/buscar/${id}`)
  }

  public crear(email:Email): Observable<any>{
  return this.http.post<any>(this.emURL + '/nueva', email);
}


public editar(id: number, email: Email): Observable<any>{
  return this.http.put<any>(this.emURL + `/editar/${id}`, email);
}

public borrar(id: number): Observable<any>{
  return this.http.delete<any>(this.emURL + `/borrar/${id}`);
}

}

