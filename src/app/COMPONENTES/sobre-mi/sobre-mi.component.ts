import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';



@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

 //inicializar variables de instancia
imagenperfil: string='';
  nombre: string= '';
apellido: string= '';
titulo: string= '';
subtitulo: string= '';
descripcion: string= '';

 constructor(//inyectar el servicio para tener acceso en la clase de los metodos
  private portfolioService: PortfolioService, public router: Router) {}

ngOnInit(): void  {
  //esto es almacenar en la variable de instancia los datos recuperados por el servicio
  this.portfolioService.getDatos().subscribe(portfolio => { 
    console.log(portfolio);
   //definir informacion a mostrar;
   this.imagenperfil=portfolio.imagenperfil;
   this.nombre=portfolio.nombre;
   this.apellido=portfolio.apellido;
   this.titulo=portfolio.titulo;
   this.subtitulo=portfolio.subtitulo;
   this.descripcion=portfolio.descripcion;

  })
 
}

}
