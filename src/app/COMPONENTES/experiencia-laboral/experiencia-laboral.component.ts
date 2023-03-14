import { Component, OnInit } from '@angular/core';
import { Experiencias } from 'src/app/model/experiencias';
import { ExperienciasService } from 'src/app/service/experiencias.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
expe: Experiencias[] = [];

  constructor(private Experienciasservice: ExperienciasService,public router: Router) {}

 

 ngOnInit(): void  {
 this.agregarExperiencia();
 }

agregarExperiencia(): void{
this.Experienciasservice.lista().subscribe(data => {this.expe = data;})
}

borrar(id:number){
  if(id !=undefined){
    this.Experienciasservice.borrar(id).subscribe(
      data=>{
        this.agregarExperiencia();
        window.location.reload();
      }, err => {
        window.location.reload();
      }
    )
  }
}
}