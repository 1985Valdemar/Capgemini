import { Component } from '@angular/core';
import { celular } from '../Types/celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: celular[] = [
    {id:1, nome:"celular XL ", descricao:"celular grande ", esgotado:false},
    {id:2, nome:"celular Normal ", esgotado:false},
    {id:1, nome:"celular Mini ", descricao:"celular pequeno ", esgotado:true}
  ]


}
