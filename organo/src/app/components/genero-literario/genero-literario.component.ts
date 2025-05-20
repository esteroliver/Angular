import { Component } from '@angular/core';
import { LivroComponent } from '../livro/livro.component';
import {Livro} from '../livro/livro';
import {livros} from '../../mock-livros';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroComponent],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {
  livro_gen: Livro = livros[0];
}
