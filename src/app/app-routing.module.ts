import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalBannerComponent } from './COMPONENTES/modales/modal-banner/modal-banner.component';
import { ModalSobremiComponent } from './COMPONENTES/modales/modal-sobremi/modal-sobremi.component';
import { ModalExperiencialaboralComponent } from './COMPONENTES/modales/modal-experiencialaboral/modal-experiencialaboral.component';
import { ModalEducacionComponent } from './COMPONENTES/modales/modal-educacion/modal-educacion.component';
import { ModalHabilidadesdurasComponent } from './COMPONENTES/modales/modal-habilidadesduras/modal-habilidadesduras.component';
import { ModalHabiliidadesblandasComponent } from './COMPONENTES/modales/modal-habiliidadesblandas/modal-habiliidadesblandas.component';
import { ModalProyectosComponent } from './COMPONENTES/modales/modal-proyectos/modal-proyectos.component';
import { loginComponent } from './COMPONENTES/login/login.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:'index', component:IndexComponent},
{path:'', redirectTo:'/index', pathMatch:'full'},
{path:'editBanner/:id', component:ModalBannerComponent},
{path:'editPersona/:id', component:ModalSobremiComponent},
{path:'editExperiencia/:id', component:ModalExperiencialaboralComponent},
{path:'editEstudio/:id', component:ModalEducacionComponent},
{path:'editHabilidadD/:id', component:ModalHabilidadesdurasComponent},
{path:'editHabilidadB/:id', component:ModalHabiliidadesblandasComponent},
{path:'editProyecto/:id', component:ModalProyectosComponent},
{path:'login', component:loginComponent},
{path:'**', component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
