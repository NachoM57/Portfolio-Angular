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
import { BarraNavegacionAdminhtmlComponent } from './COMPONENTES/barra-navegacion-adminhtml/barra-navegacion-adminhtml.component';
import { AdminComponent } from './admin/admin.component';
import { ModalesComponent } from './COMPONENTES/modales/modales.component';
import { ModalSobremiComponent } from './COMPONENTES/modales/modal-sobremi/modal-sobremi.component';
import { ModalFotoperfilComponent } from './COMPONENTES/modales/modal-fotoperfil/modal-fotoperfil.component';
import { ModalUserComponent } from './COMPONENTES/modales/modal-user/modal-user.component';
import { ModalBannerComponent } from './COMPONENTES/modales/modal-banner/modal-banner.component';
import { ModalExperiencialaboralComponent } from './COMPONENTES/modales/modal-experiencialaboral/modal-experiencialaboral.component';
import { ModalEducacionComponent } from './COMPONENTES/modales/modal-educacion/modal-educacion.component';
import { ModalHabilidadesdurasComponent } from './COMPONENTES/modales/modal-habilidadesduras/modal-habilidadesduras.component';
import { ModalHabiliidadesblandasComponent } from './COMPONENTES/modales/modal-habiliidadesblandas/modal-habiliidadesblandas.component';
import { ModalProyectosComponent } from './COMPONENTES/modales/modal-proyectos/modal-proyectos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    BarraNavegacionAdminhtmlComponent,
    AdminComponent,
    ModalesComponent,
    ModalSobremiComponent,
    ModalFotoperfilComponent,
    ModalUserComponent,
    ModalBannerComponent,
    ModalExperiencialaboralComponent,
    ModalEducacionComponent,
    ModalHabilidadesdurasComponent,
    ModalHabiliidadesblandasComponent,
    ModalProyectosComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
