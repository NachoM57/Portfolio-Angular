import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-modal-sobremi',
  templateUrl: './modal-sobremi.component.html',
  styleUrls: ['./modal-sobremi.component.css']
})
export class ModalSobremiComponent implements OnInit {
  persona: Persona = null;
  form: UntypedFormGroup;



  constructor(public router: Router, private activatedRouter: ActivatedRoute, private personaservice: PersonaService, private formBuilder: UntypedFormBuilder, private httpCliente: HttpClient) {
    this.form = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      imagenperfil: [''],
      descripcion: [''],
    })

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaservice.buscar(id).subscribe(
      data => {
        this.persona = data;
      })
  }

  onEditar(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaservice.editar(id, this.persona).subscribe(
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



