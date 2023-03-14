import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HabilidadesDuras } from 'src/app/model/habilidades-duras';
import { HabilidadesDurasService } from 'src/app/service/habilidades-duras.service';

@Component({
  selector: 'app-agregar-habilidad-d',
  templateUrl: './agregar-habilidad-d.component.html',
  styleUrls: ['./agregar-habilidad-d.component.css']
})
export class AgregarHabilidadDComponent implements OnInit{
  form: FormGroup;
  habilidadD: HabilidadesDuras = {

habilidad: '',
porcentaje: '',
}
enviado = false;

constructor(private sHabilidadD:HabilidadesDurasService, public router: Router, private formbuilder:FormBuilder){
  this.form = this.formbuilder.group({
habilidad: [''],
porcentaje: [''],
  })
}

  ngOnInit(): void {
    }

    onCreate(): void{
const data = {
  habilidad: this.habilidadD.habilidad,
  porcentaje: this.habilidadD.porcentaje,

};
this.sHabilidadD.crear(data).subscribe({
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
