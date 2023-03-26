import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencias } from 'src/app/model/experiencias';
import { ExperienciasService } from 'src/app/service/experiencias.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit{
  form: FormGroup;
  experiencia: Experiencias = {
puesto: '',
lugar: '',
inicio: '',
fin: '',
}
enviado = false;
isLogged=false;

constructor(private sExperiencia:ExperienciasService, public router: Router, private formbuilder:FormBuilder, private tokenService: TokenService){
  this.form = this.formbuilder.group({
puesto: [''],
lugar: [''],
inicio: [''],
fin: [''],
  })
}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else {
      this.isLogged = false;
    }
    }

    onCreate(): void{
const data = {
  puesto: this.experiencia.puesto,
  lugar: this.experiencia.lugar,
  inicio: this.experiencia.inicio,
  fin: this.experiencia.fin,
};
this.sExperiencia.crear(data).subscribe({
  next:(res) =>{
    console.log(res);
    this.enviado = true;
    window.location.reload();
  },
  error:(e) =>
  window.location.reload()
});
}

limpiar(): void{
  this.form.reset();
}
}

