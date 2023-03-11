import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyec: Proyectos[] = [];

  constructor(private proyectosService: ProyectosService,public router: Router) {}

 

 ngOnInit(): void  {
 this.agregarPersona();
 }

agregarPersona(): void{
this.proyectosService.lista().subscribe(data => {this.proyec = data;})
}

}




