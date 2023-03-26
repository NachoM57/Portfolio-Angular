import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  estud: Estudios[] = [];
  isLogged=false;
  constructor(private estudioservice: EstudiosService,public router: Router, private tokenService: TokenService) {}

 

 ngOnInit(): void  {
 this.agregarEstudio();
 if(this.tokenService.getToken()){
  this.isLogged= true;
} else {
  this.isLogged = false;
}
}

agregarEstudio(): void{
this.estudioservice.lista().subscribe(data => {this.estud = data;})
}

  
borrar(id:number){
  if(id !=undefined){
    this.estudioservice.borrar(id).subscribe(
      data=>{
        this.agregarEstudio();
        window.location.reload();
      }, err => {
        window.location.reload();
      }
    )
  }
}
}
 


