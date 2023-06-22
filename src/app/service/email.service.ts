import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from '../model/email';
import { environment } from 'src/environments/environment';

const urlBase = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private backendUrl = `${urlBase}/contacto/email`;

  constructor(private http: HttpClient) { }

  sendContactForm(email: Email): Observable<any> {
    return this.http.post<any>(this.backendUrl, email);
  }

}
