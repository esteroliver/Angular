import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { FormNovaTransacaoComponent } from './components/form-nova-transacao/form-nova-transacao.component';
import { Transacao } from './modelos/transacao';

@Component({
  selector: 'app-root',
  imports: [
    BannerComponent,
    FormNovaTransacaoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  transacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.transacoes().reduce((acc, transacaoAtual) => {
      if(transacaoAtual.tipo == "deposito")
        return acc + transacaoAtual.valor;
      else
        return acc - transacaoAtual.valor;
    }, 0);
  });

  processarTransacao(transacao : Transacao){
    this.transacoes.update((listaAtual) => [transacao, ...listaAtual]);
  }
}
