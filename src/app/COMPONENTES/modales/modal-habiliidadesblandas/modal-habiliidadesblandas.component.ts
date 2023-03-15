import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadesBlandas } from 'src/app/model/habilidades-blandas';
import { HabilidadesBlandasService } from 'src/app/service/habilidades-blandas.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-modal-habiliidadesblandas',
  templateUrl: './modal-habiliidadesblandas.component.html',
  styleUrls: ['./modal-habiliidadesblandas.component.css']
})
export class ModalHabiliidadesblandasComponent implements OnInit {
  habilidadB: HabilidadesBlandas = null;
  form: UntypedFormGroup;
  
 
 
   constructor(public router: Router, private activatedRouter: ActivatedRoute, private habilidadBservice: HabilidadesBlandasService, private formBuilder: UntypedFormBuilder, private httpCliente: HttpClient) {
     this.form = this.formBuilder.group({
       imagen:[''],
       titulo:[''],
       descripcion:[''],
     })
 
    }
 
   ngOnInit(): void {
     const id = this.activatedRouter.snapshot.params['id'];
     this.habilidadBservice.buscar(id).subscribe(
       data =>{
         this.habilidadB = data;
       })
   }
 
   onEditar(): void{
     const id = this.activatedRouter.snapshot.params['id'];
     this.habilidadBservice.editar(id, this.habilidadB).subscribe(
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



