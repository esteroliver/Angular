import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { FormNovaTransacaoComponent } from './components/form-nova-transacao/form-nova-transacao.component';
import { TipoTransacao, Transacao } from './modelos/transacao';
import { ExtratoComponent } from './components/extrato/extrato.component';

@Component({
  selector: 'app-root',
  imports: [
    BannerComponent,
    FormNovaTransacaoComponent,
    ExtratoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  transacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.transacoes().reduce((acc, transacaoAtual) => {
      if(transacaoAtual.tipo == TipoTransacao.DEPOSITO)
        return acc + transacaoAtual.valor;
      else if (transacaoAtual.tipo == TipoTransacao.SAQUE)
        return acc - transacaoAtual.valor;
      else
        throw new Error("Transação inválida!");
    }, 0);
  });

  processarTransacao(transacao : Transacao){
    if(transacao.valor > this.saldo() && transacao.tipo == TipoTransacao.SAQUE)
      alert("Saldo não pode ficar negativo.");

    else
      this.transacoes.update((listaAtual) => [transacao, ...listaAtual]);
  }
}
