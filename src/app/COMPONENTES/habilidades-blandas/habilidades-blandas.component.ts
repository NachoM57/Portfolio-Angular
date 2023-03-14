import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabilidadesBlandas } from 'src/app/model/habilidades-blandas';
import { HabilidadesBlandasService } from 'src/app/service/habilidades-blandas.service';

@Component({
  selector: 'app-habilidades-blandas',
  templateUrl: './habilidades-blandas.component.html',
  styleUrls: ['./habilidades-blandas.component.css']
})
export class HabilidadesBlandasComponent implements OnInit {
  habilidadB: HabilidadesBlandas[] = [];

  constructor(private habilidadesblandasService: HabilidadesBlandasService,public router: Router) {}

 

 ngOnInit(): void  {
 this.agregarHabilidadesBlandas();
 }

agregarHabilidadesBlandas(): void{
this.habilidadesblandasService.lista().subscribe(data => {this.habilidadB = data;})
}

borrar(id:number){
  if(id !=undefined){
    this.habilidadesblandasService.borrar(id).subscribe(
      data=>{
        this.agregarHabilidadesBlandas();
        window.location.reload();
      }, err => {
        window.location.reload();
      }
    )
  }
}
}


