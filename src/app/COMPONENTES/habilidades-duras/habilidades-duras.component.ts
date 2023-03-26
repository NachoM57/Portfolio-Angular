import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabilidadesDuras } from 'src/app/model/habilidades-duras';
import { HabilidadesDurasService } from 'src/app/service/habilidades-duras.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades-duras',
  templateUrl: './habilidades-duras.component.html',
  styleUrls: ['./habilidades-duras.component.css']
})
export class HabilidadesDurasComponent implements OnInit {
  habilidadD: HabilidadesDuras[] = [];
  isLogged=false;
  constructor(private habilidadesdurasService: HabilidadesDurasService,public router: Router, private tokenService: TokenService) {}

 

 ngOnInit(): void  {
 this.agregarHabilidadesDuras();
 if(this.tokenService.getToken()){
  this.isLogged= true;
} else {
  this.isLogged = false;
}
}

agregarHabilidadesDuras(): void{
this.habilidadesdurasService.lista().subscribe(data => {this.habilidadD = data;})
}


borrar(id:number){
  if(id !=undefined){
    this.habilidadesdurasService.borrar(id).subscribe(
      data=>{
        this.agregarHabilidadesDuras();
        window.location.reload();
      }, err => {
        window.location.reload();
      }
    )
  }
}
}


