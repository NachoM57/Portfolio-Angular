import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit{
  form: FormGroup;
  proyecto: Proyectos = {

imagen: '',
titulo: '',
descripcion: '',
inicio: '',
fin: '',
}
enviado = false;

constructor(private sProyecto:ProyectosService, public router: Router, private formbuilder:FormBuilder){
  this.form = this.formbuilder.group({
imagen: [''],
titulo: [''],
descripcion: [''],
inicio: [''],
fin: [''],
  })
}

  ngOnInit(): void {
    }

    onCreate(): void{
const data = {
  imagen: this.proyecto.imagen,
  titulo: this.proyecto.titulo,
  descripcion: this.proyecto.descripcion,
  inicio: this.proyecto.inicio,
  fin: this.proyecto.fin,
};
this.sProyecto.crear(data).subscribe({
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

