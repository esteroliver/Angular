import { Component } from '@angular/core';
import { Livro } from '../livro/livro';
import { livros } from '../../mock-livros';
import { ListaGeneroLiterario } from './lista-genero';
import { GeneroLiterarioComponent } from '../genero-literario/genero-literario.component';

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent {
  generos_lista: ListaGeneroLiterario[] = [];
  livros_por_genero: Map<string, Livro[]> = new Map<string, Livro[]>();

  ngOnInit(){
    this.livros_por_genero = new Map();

    livros.forEach((livro : Livro) => {
      const generoId : string = livro.genero.id;
      if(!this.livros_por_genero.has(generoId)){
        this.livros_por_genero.set(generoId, []);
      }
      this.livros_por_genero.get(generoId)?.push(livro);
    });

    this.generos_lista = [
      {
        id: 'romance',
        value: "Romance",
        livros: this.livros_por_genero.get("romance") ?? []
      },
      {
        id: 'misterio',
        value: 'Mistério',
        livros: this.livros_por_genero.get("misterio") ?? []
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        livros: this.livros_por_genero.get("fantasia") ?? []
      },
      {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        livros: this.livros_por_genero.get("ficcao-cientifica") ?? []
      },
      {
        id: 'tecnicos',
        value: 'Técnicos',
        livros: this.livros_por_genero.get("tecnicos") ?? []
      },
    ]
  }
}
