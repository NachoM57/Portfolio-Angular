import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  estud: Estudios[] = [];

  constructor(private estudioservice: EstudiosService,public router: Router) {}

 

 ngOnInit(): void  {
 this.agregarEstudio();
 }

agregarEstudio(): void{
this.estudioservice.lista().subscribe(data => {this.estud = data;})
}

}
  
 
 
 


