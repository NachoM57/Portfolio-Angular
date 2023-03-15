import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-modal-proyectos',
  templateUrl: './modal-proyectos.component.html',
  styleUrls: ['./modal-proyectos.component.css']
})
export class ModalProyectosComponent implements OnInit {
  proyectos: Proyectos = null;
  form: UntypedFormGroup;
  
 
 
   constructor(public router: Router, private activatedRouter: ActivatedRoute, private proyectosservice: ProyectosService, private formBuilder: UntypedFormBuilder, private httpCliente: HttpClient) {
     this.form = this.formBuilder.group({
       imagen:[''],
       titulo:[''],
       descripcion:[''],
       inicio:[''],
       fin:[''],
     })
 
    }
 
   ngOnInit(): void {
     const id = this.activatedRouter.snapshot.params['id'];
     this.proyectosservice.buscar(id).subscribe(
       data =>{
         this.proyectos = data;
       })
   }
 
   onEditar(): void{
     const id = this.activatedRouter.snapshot.params['id'];
     this.proyectosservice.editar(id, this.proyectos).subscribe(
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


