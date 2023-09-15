import { Injectable } from '@angular/core';
//esto es para suscribirse y que se reciba respuesta de forma asincronica
import { Observable } from 'rxjs';
//esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  //el primer hhtp se llama "alias"
  constructor(private http: HttpClient) { }

  //metodo observable que devuelve los datos
  getDatos(): Observable<any> {
    //se llama al json con su path -ruta-, o bien, en su lugar se pujuede poner una URL para traer datos de un json online
    return this.http.get('./assets/json/portfolio.json');
  }




}
