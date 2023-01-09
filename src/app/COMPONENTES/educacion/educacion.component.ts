import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  //inicializar variables de instancia
educaciones: any=[]
 
  constructor(//inyectar el servicio para tener acceso en la clase de los metodos
   private portfolioService: PortfolioService, public router: Router) {}
 
 ngOnInit(): void  {
   //esto es almacenar en la variable de instancia los datos recuperados por el servicio
   this.portfolioService.getDatos().subscribe(portfolio => { 
     console.log(portfolio);
    //definir informacion a mostrar;
    this.educaciones=portfolio.educaciones;
  
 
   })
  
 }
 
 }


