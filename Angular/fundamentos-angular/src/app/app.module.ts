import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicoComponent } from './servico/servico.component';
import { FormsModule } from '@angular/forms';
import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './filho/filho.component';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';
import { Servico2Component } from './servico2/servico2.component';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicoComponent,
    PaiComponent,
    FilhoComponent,
    ComponentePersonalizadoComponent,
    Servico2Component,
    PipeCustomizadoComponent,
    MultiplicaPorPipe,
    RenderizandoListasComponent,
    SegundoComponenteComponent,
    TwoWayDataBindingComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
