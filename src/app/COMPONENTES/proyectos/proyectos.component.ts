import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

//inicializar variables de instancia
imagenproyecto: string='';

 constructor(//inyectar el servicio para tener acceso en la clase de los metodos
  private portfolioService: PortfolioService, public router: Router) {}

ngOnInit(): void  {
  //esto es almacenar en la variable de instancia los datos recuperados por el servicio
  this.portfolioService.getDatos().subscribe(portfolio => { 
    console.log(portfolio);
   //definir informacion a mostrar;
   this.imagenproyecto=portfolio.imagenproyecto;
  

  })
 
}

}


