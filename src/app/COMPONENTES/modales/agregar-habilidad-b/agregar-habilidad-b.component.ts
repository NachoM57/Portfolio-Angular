import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HabilidadesBlandas } from 'src/app/model/habilidades-blandas';
import { HabilidadesBlandasService } from 'src/app/service/habilidades-blandas.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-agregar-habilidad-b',
  templateUrl: './agregar-habilidad-b.component.html',
  styleUrls: ['./agregar-habilidad-b.component.css']
})
export class AgregarHabilidadBComponent implements OnInit{
  form: FormGroup;
  habilidadB: HabilidadesBlandas = {

imagen: '',
titulo: '',
descripcion: '',
}
enviado = false;
isLogged=false;
constructor(private sHabilidadB:HabilidadesBlandasService, public router: Router, private formbuilder:FormBuilder, private tokenService: TokenService){
  this.form = this.formbuilder.group({
imagen: [''],
titulo: [''],
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
  imagen: this.habilidadB.imagen,
  titulo: this.habilidadB.titulo,
  descripcion: this.habilidadB.descripcion,
};
this.sHabilidadB.crear(data).subscribe({
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


