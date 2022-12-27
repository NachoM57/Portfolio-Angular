import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    RedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
