import {Component, input, InputSignal} from '@angular/core';
import { Livro } from './livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro',
  imports: [ CommonModule ],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  livro: InputSignal<Livro> = input.required<Livro>();

  alternarFavorito(){
    this.livro().favorito = !this.livro().favorito;
  }

}
