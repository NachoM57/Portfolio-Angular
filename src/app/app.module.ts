import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './COMPONENTES/proyectos/proyectos.component';
import { HabilidadesBlandasComponent } from './COMPONENTES/habilidades-blandas/habilidades-blandas.component';
import { HabilidadesDurasComponent } from './COMPONENTES/habilidades-duras/habilidades-duras.component';
import { EducacionComponent } from './COMPONENTES/educacion/educacion.component';
import { ExperienciaLaboralComponent } from './COMPONENTES/experiencia-laboral/experiencia-laboral.component';
import { SobreMiComponent } from './COMPONENTES/sobre-mi/sobre-mi.component';
import { BannerComponent } from './COMPONENTES/banner/banner.component';
import { BarraNavegacionComponent } from './COMPONENTES/barra-navegacion/barra-navegacion.component';
import { RedesComponent } from './COMPONENTES/barra-navegacion/redes/redes.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { ModalesComponent } from './COMPONENTES/modales/modales.component';
import { ModalSobremiComponent } from './COMPONENTES/modales/modal-sobremi/modal-sobremi.component';
import { ModalBannerComponent } from './COMPONENTES/modales/modal-banner/modal-banner.component';
import { ModalExperiencialaboralComponent } from './COMPONENTES/modales/modal-experiencialaboral/modal-experiencialaboral.component';
import { ModalEducacionComponent } from './COMPONENTES/modales/modal-educacion/modal-educacion.component';
import { ModalHabilidadesdurasComponent } from './COMPONENTES/modales/modal-habilidadesduras/modal-habilidadesduras.component';
import { ModalHabiliidadesblandasComponent } from './COMPONENTES/modales/modal-habiliidadesblandas/modal-habiliidadesblandas.component';
import { ModalProyectosComponent } from './COMPONENTES/modales/modal-proyectos/modal-proyectos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './COMPONENTES/footer/footer.component';
import { AgregarExperienciaComponent } from './COMPONENTES/modales/agregar-experiencia/agregar-experiencia.component';
import { AgregarEducacionComponent } from './COMPONENTES/modales/agregar-educacion/agregar-educacion.component';
import { AgregarHabilidadDComponent } from './COMPONENTES/modales/agregar-habilidad-d/agregar-habilidad-d.component';
import { AgregarHabilidadBComponent } from './COMPONENTES/modales/agregar-habilidad-b/agregar-habilidad-b.component';
import { AgregarProyectoComponent } from './COMPONENTES/modales/agregar-proyecto/agregar-proyecto.component';
import { loginComponent } from './COMPONENTES/login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    HabilidadesBlandasComponent,
    HabilidadesDurasComponent,
    EducacionComponent,
    ExperienciaLaboralComponent,
    SobreMiComponent,
    BannerComponent,
    BarraNavegacionComponent,
    RedesComponent,
    ErrorComponent,
    IndexComponent,
    ModalesComponent,
    ModalSobremiComponent,
    ModalBannerComponent,
    ModalExperiencialaboralComponent,
    ModalEducacionComponent,
    ModalHabilidadesdurasComponent,
    ModalHabiliidadesblandasComponent,
    ModalProyectosComponent,
    FooterComponent,
    AgregarExperienciaComponent,
    AgregarEducacionComponent,
    AgregarHabilidadDComponent,
    AgregarHabilidadBComponent,
    AgregarProyectoComponent,
    loginComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
