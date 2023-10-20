import { Component } from '@angular/core';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent {
  nome = "";

  adicionarNome(){
    console.log(`O nome ${this.nome} foi adicionado`)
  }

}
