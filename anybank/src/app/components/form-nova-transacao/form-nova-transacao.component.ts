import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../../modelos/transacao';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [
    FormsModule,
    KeyValuePipe
  ],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
export class FormNovaTransacaoComponent {
  valorTransacao = "";
  tipoTransacao = "";
  tipoTransacaoEnum = TipoTransacao;

  transacao = output<Transacao>();

  submeterTransacao(){
    const transacao = new Transacao(
      this.tipoTransacao as TipoTransacao, 
      Number(this.valorTransacao)
    );
    this.transacao.emit(transacao);
  }
}
