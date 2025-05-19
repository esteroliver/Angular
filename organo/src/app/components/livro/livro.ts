import { GeneroLiterario } from './genero-literario';

export interface Livro {
  titulo: string;
  autoria: string;
  capa: string;
  favorito: boolean;
  genero: GeneroLiterario;
}
