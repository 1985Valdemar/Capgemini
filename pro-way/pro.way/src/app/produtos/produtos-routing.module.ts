import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { NaoEncontradoComponent } from '../nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path:':id', component: DetalheProdutoComponent},
  { path: '**', component: NaoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
