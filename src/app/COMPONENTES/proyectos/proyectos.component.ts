import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyec: Proyectos[] = [];
  isLogged=false;
  constructor(private proyectosService: ProyectosService,public router: Router, private tokenService: TokenService) {}

 

 ngOnInit(): void  {
 this.agregarProyecto();
 if(this.tokenService.getToken()){
  this.isLogged= true;
} else {
  this.isLogged = false;
}
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




