import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

//inicializar variables de instancia
banner: string='';
titulobanner: string='';
 constructor(//inyectar el servicio para tener acceso en la clase de los metodos
  private portfolioService: PortfolioService, public router: Router) {}

ngOnInit(): void  {
  //esto es almacenar en la variable de instancia los datos recuperados por el servicio
  this.portfolioService.getDatos().subscribe(portfolio => { 
    console.log(portfolio);
   //definir informacion a mostrar;
   this.banner=portfolio.banner;
   this.titulobanner=portfolio.titulobanner;
   })
 
}
//ts para scroll del botón al footer
scrollToElement(selector:any) {
  const element = document.querySelector(selector)
  element ? element.scrollIntoView({behavior: "smooth"}): null;


  
}



}
