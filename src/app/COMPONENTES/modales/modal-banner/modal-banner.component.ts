import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-modal-banner',
  templateUrl: './modal-banner.component.html',
  styleUrls: ['./modal-banner.component.css']
})
export class ModalBannerComponent implements OnInit {
  banner: Banner = null;
  form: UntypedFormGroup;
  
 
 
   constructor(public router: Router, private activatedRouter: ActivatedRoute, private bannerservice: BannerService, private formBuilder: UntypedFormBuilder, private httpCliente: HttpClient) {
     this.form = this.formBuilder.group({
       imagenbanner:[''],
       nombrebanner:[''],
       titulobanner:[''],
     })
 
    }
 
   ngOnInit(): void {
     const id = this.activatedRouter.snapshot.params['id'];
     this.bannerservice.buscar(id).subscribe(
       data =>{
         this.banner = data;
       })
   }
 
   onEditar(): void{
     const id = this.activatedRouter.snapshot.params['id'];
     this.bannerservice.editar(id, this.banner).subscribe(
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


