import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
//inicializar variables de instancia
titulofooter: string='';
redunofooter: string='';
reddosfooter: string='';
redtresfooter: string='';

constructor(//inyectar el servicio para tener acceso en la clase de los metodos
private portfolioService: PortfolioService, public router: Router) {}

  ngOnInit(): void {
     //esto es almacenar en la variable de instancia los datos recuperados por el servicio
  this.portfolioService.getDatos().subscribe(portfolio => { 
    console.log(portfolio);
   //definir informacion a mostrar;
   this.titulofooter=portfolio.titulofooter;
   this.redunofooter=portfolio.redunofooter;
   this.reddosfooter=portfolio.reddosfooter;
   this.redtresfooter=portfolio.redtresfooter;
  })

}
//codigo para volver arriba
scrolltoElement(selector:any){
  const element=
  document.querySelector(selector)
  element ?
  element.scrollIntoView({behavior:"smooth"}):null;
  
  }
  


}