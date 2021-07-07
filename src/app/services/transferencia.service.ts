import { Injectable } from '@angular/core';
//prove métodos que façam requisições para uma api rest
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  //injeção de dependência
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias/';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: Transferencia) {
    this.hidratar(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  todas() {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  private hidratar(transferencia: Transferencia) {
    transferencia.data = new Date();
  }
}
