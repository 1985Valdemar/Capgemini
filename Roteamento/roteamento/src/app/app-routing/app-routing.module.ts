import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiraPaginaComponent } from '../primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from '../segunda-pagina/segunda-pagina.component';
import { PaginaNaoEncontradaComponent } from '../pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaComParametrosComponent } from '../pagina-com-parametros/pagina-com-parametros.component';
import { PaginaProtegidaComponent } from '../pagina-protegida/pagina-protegida.component';
import { authGuard } from '../auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }from '@angular/forms';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes =[
  {path: "primeira-pagina", component: PrimeiraPaginaComponent},
  {path:"segunda-pagina", component: SegundaPaginaComponent},
  {path:"", redirectTo:"primeira-pagina", pathMatch:'full'},
  {path:"pagina-com-parametros/:id",component: PaginaComParametrosComponent},
  {path:"login",component:LoginComponent},
  {path:"**", component: PaginaNaoEncontradaComponent}
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes),
             FormsModule,BrowserModule],
  exports: [RouterModule],
  bootstrap:[AppComponent]
})
export class AppRoutingModule { }

export class AppModule { }
