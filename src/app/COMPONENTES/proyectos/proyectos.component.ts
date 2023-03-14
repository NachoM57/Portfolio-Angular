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
 this.agregarProyecto();
 }

agregarProyecto(): void{
this.proyectosService.lista().subscribe(data => {this.proyec = data;})
}

borrar(id:number){
  if(id !=undefined){
    this.proyectosService.borrar(id).subscribe(
      data=>{
        this.agregarProyecto();
        window.location.reload();
      }, err => {
        window.location.reload();
      }
    )
  }
}
}




