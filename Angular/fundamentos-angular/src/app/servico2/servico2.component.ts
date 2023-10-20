import { Component } from '@angular/core';

@Component({
  selector: 'app-servico2',
  templateUrl: './servico2.component.html',
  styleUrls: ['./servico2.component.css']
})
export class Servico2Component {
  
  Pao = "";

  adicionarPao(){
    console.log(`O nome do pao ${this.Pao} foi adicionado`)

  }

}
