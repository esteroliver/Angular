import {Component, InputSignal} from '@angular/core';
import { LivroComponent } from '../livro/livro.component';
import { input } from '@angular/core';
import { ListaGeneroLiterario } from '../lista-livros/lista-genero';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genero-literario',
  imports: [
    LivroComponent,
    CommonModule
  ],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {
  genero : InputSignal<ListaGeneroLiterario> = input.required<ListaGeneroLiterario>();
}
