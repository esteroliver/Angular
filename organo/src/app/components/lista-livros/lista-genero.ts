import { Livro } from '../livro/livro';

export interface ListaGeneroLiterario {
  id: string;
  value: string;
  livros: Livro[];
}
