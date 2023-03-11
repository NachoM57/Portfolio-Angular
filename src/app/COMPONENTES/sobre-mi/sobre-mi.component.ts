import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  perso: Persona[] = [];

  constructor(private personaService: PersonaService,public router: Router) {}

 

 ngOnInit(): void  {
 this.agregarPersona();
 }

agregarPersona(): void{
this.personaService.lista().subscribe(data => {this.perso = data;})
}

}
