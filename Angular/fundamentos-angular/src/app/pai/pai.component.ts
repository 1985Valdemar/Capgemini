import { Component } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent {
  sobrenome = "Tabajara"

  mostraNomeCompleto(nomeCompleto: any){
    alert(`O nome Completo é: ${nomeCompleto}`);
  }

}
