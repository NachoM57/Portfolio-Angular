import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {
  estudios: Estudios = null;
  form: UntypedFormGroup;



  constructor(public router: Router, private activatedRouter: ActivatedRoute, private estudiosservice: EstudiosService, private formBuilder: UntypedFormBuilder, private httpCliente: HttpClient) {
    this.form = this.formBuilder.group({
      estudio: [''],
      lugar: [''],
      descripcion: [''],
      inicio: [''],
      fin: [''],
    })

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.estudiosservice.buscar(id).subscribe(
      data => {
        this.estudios = data;
      })
  }

  onEditar(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.estudiosservice.editar(id, this.estudios).subscribe(
      data => {
        this.router.navigateByUrl('/index');
      }, err => {
        this.router.navigateByUrl('/index');
      }
    )
  }


  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      alert("Todo salio bien ¡Enviar formuario!")
    } else {
      this.form.markAllAsTouched();
    }
  }

  volver(event: Event) {
    this.router.navigateByUrl('/index');
  }

}


