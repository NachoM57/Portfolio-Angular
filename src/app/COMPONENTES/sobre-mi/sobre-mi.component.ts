import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  perso: Persona[] = [];
  isLogged = false;

  constructor(private personaService: PersonaService, public router: Router, private tokenService: TokenService) { }



  ngOnInit(): void {
    this.agregarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  agregarPersona(): void {
    this.personaService.lista().subscribe(data => { this.perso = data; })
  }


}
