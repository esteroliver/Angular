import {Component, input, InputSignal} from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  livro: InputSignal<Livro> = input.required<Livro>();

  alternarFavorito(){
    this.livro().favorito = !this.livro().favorito;
  }

}
