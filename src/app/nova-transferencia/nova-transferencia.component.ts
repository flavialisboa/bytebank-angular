import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { TransferenciaService } from '../services/transferencia.service';
//o visual code está importanto o eventEmitter de forma errada.
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Solicitada nova transferência');

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      //método subscribe para quando precisa manipular algo da tela
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl("extrato")
    },
    error => console.error(error));
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
