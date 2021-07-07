import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService) {}
  /*transferir($event) {
    const transferencia = { ...$event, data: new Date() };
    ... = ao invés do objeto, está pegando apenas as propriedades internas dele e passando para dentro do objeto transferências

    this.service.adicionar($event);     Antes era utilizado para a comunicação dos componentes, não mais necessário com o service
  }*/
}
