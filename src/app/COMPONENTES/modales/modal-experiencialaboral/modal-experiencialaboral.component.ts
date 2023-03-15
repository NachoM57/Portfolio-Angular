import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencias } from 'src/app/model/experiencias';
import { ExperienciasService } from 'src/app/service/experiencias.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-modal-experiencialaboral',
  templateUrl: './modal-experiencialaboral.component.html',
  styleUrls: ['./modal-experiencialaboral.component.css']
})
export class ModalExperiencialaboralComponent implements OnInit {
  experiencias: Experiencias = null;
  form: UntypedFormGroup;
  
 
 
   constructor(public router: Router, private activatedRouter: ActivatedRoute, private experienciasservice: ExperienciasService, private formBuilder: UntypedFormBuilder, private httpCliente: HttpClient) {
     this.form = this.formBuilder.group({
       puesto:[''],
       lugar:[''],
       inicio:[''],
       fin:[''],
     })
 
    }
 
   ngOnInit(): void {
     const id = this.activatedRouter.snapshot.params['id'];
     this.experienciasservice.buscar(id).subscribe(
       data =>{
         this.experiencias = data;
       })
   }
 
   onEditar(): void{
     const id = this.activatedRouter.snapshot.params['id'];
     this.experienciasservice.editar(id, this.experiencias).subscribe(
       data=>{
         this.router.navigateByUrl('/index');
       }, err =>{
         this.router.navigateByUrl('/index');
       }
     )
   }
 
   
   onEnviar(event: Event){
     event.preventDefault; 
    if (this.form.valid){
       alert("Todo salio bien ¡Enviar formuario!")
     }else{    
       this.form.markAllAsTouched(); 
     }
   }
 
     volver(event:Event){
       this.router.navigateByUrl('/index');
     }
 
 }
