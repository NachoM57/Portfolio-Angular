import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadesDuras } from 'src/app/model/habilidades-duras';
import { HabilidadesDurasService } from 'src/app/service/habilidades-duras.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-modal-habilidadesduras',
  templateUrl: './modal-habilidadesduras.component.html',
  styleUrls: ['./modal-habilidadesduras.component.css']
})
export class ModalHabilidadesdurasComponent implements OnInit {
  habilidadD: HabilidadesDuras = null;
  form: UntypedFormGroup;



  constructor(public router: Router, private activatedRouter: ActivatedRoute, private habilidadDservice: HabilidadesDurasService, private formBuilder: UntypedFormBuilder, private httpCliente: HttpClient) {
    this.form = this.formBuilder.group({
      habilidad: [''],
      porcentaje: [''],
    })

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadDservice.buscar(id).subscribe(
      data => {
        this.habilidadD = data;
      })
  }

  onEditar(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadDservice.editar(id, this.habilidadD).subscribe(
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


