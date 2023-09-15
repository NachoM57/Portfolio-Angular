import { Component, OnInit } from '@angular/core';
import { Experiencias } from 'src/app/model/experiencias';
import { Estudios } from 'src/app/model/estudios';
import { ExperienciasService } from 'src/app/service/experiencias.service';
import { EstudiosService } from 'src/app/service/estudios.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  expe: Experiencias[] = [];
  estud: Estudios[] = [];
  isLogged = false;

  constructor(private Experienciasservice: ExperienciasService, private estudioservice: EstudiosService, public router: Router, private tokenService: TokenService) { }



  ngOnInit(): void {
    this.agregarExperiencia();
    this.agregarEstudio();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  agregarExperiencia(): void {
    this.Experienciasservice.lista().subscribe(data => { this.expe = data; })
  }

  agregarEstudio(): void {
    this.estudioservice.lista().subscribe(data => { this.estud = data; })
  }

  borrar(id: number) {
    if (id != undefined) {
      this.Experienciasservice.borrar(id).subscribe(
        data => {
          this.agregarExperiencia();
          window.location.reload();
        }, err => {
          window.location.reload();
        }
      )
    }
  }


  eliminar(id: number) {
    if (id != undefined) {
      this.estudioservice.borrar(id).subscribe(
        data => {
          this.agregarEstudio();
          window.location.reload();
        }, err => {
          window.location.reload();
        }
      )
    }
  }
}