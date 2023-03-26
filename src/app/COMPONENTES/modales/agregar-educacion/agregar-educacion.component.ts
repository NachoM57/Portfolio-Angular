import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit{
  form: FormGroup;
  estudio: Estudios = {

estudio: '',
lugar: '',
inicio: '',
fin: '',
descripcion: '',
}
enviado = false;
isLogged=false;
constructor(private sEstudio:EstudiosService, public router: Router, private formbuilder:FormBuilder, private tokenService: TokenService){
  this.form = this.formbuilder.group({
estudio: [''],
lugar: [''],
inicio: [''],
fin: [''],
descripcion: [''],
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
  estudio: this.estudio.estudio,
  lugar: this.estudio.lugar,
  inicio: this.estudio.inicio,
  fin: this.estudio.fin,
  descripcion: this.estudio.descripcion,
};
this.sEstudio.crear(data).subscribe({
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



