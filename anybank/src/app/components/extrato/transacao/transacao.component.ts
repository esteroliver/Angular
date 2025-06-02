import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { TipoTransacao, Transacao } from '../../../modelos/transacao';

@Component({
  selector: 'app-transacao',
  imports: [ CurrencyPipe, DatePipe ],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css'
})
export class TransacaoComponent {
  transacao = input.required<Transacao>();
  tipoTransacao = TipoTransacao;
}
