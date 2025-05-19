import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  alternarFavorito(){
    this.livro.favorito = !this.livro.favorito;
  }

  livro = {
    titulo: "As ondas",
    autoria: "Virginia Wolf",
    capa: "https://books.google.com.br/books/publisher/content?id=K88vEAAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U17ilHei2sAJISd9dgpqzbnbgyUBw&w=1280",
    favorito: false
  }
}
