import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "joão";
  dataNascimento = "1995-01-01";
  urlImagem = "/assets/fusca-verde.webp";

  mostrarDataNascimento(){
    alert(`A Data de Nascimento do João é: ${this.dataNascimento} `)
  }
}
