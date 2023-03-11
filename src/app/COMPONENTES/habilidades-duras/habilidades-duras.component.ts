import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabilidadesDuras } from 'src/app/model/habilidades-duras';
import { HabilidadesDurasService } from 'src/app/service/habilidades-duras.service';

@Component({
  selector: 'app-habilidades-duras',
  templateUrl: './habilidades-duras.component.html',
  styleUrls: ['./habilidades-duras.component.css']
})
export class HabilidadesDurasComponent implements OnInit {
  habilidadD: HabilidadesDuras[] = [];

  constructor(private habilidadesdurasService: HabilidadesDurasService,public router: Router) {}

 

 ngOnInit(): void  {
 this.agregarHabilidadesDuras();
 }

agregarHabilidadesDuras(): void{
this.habilidadesdurasService.lista().subscribe(data => {this.habilidadD = data;})
}

}



