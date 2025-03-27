export default class Livro {
  constructor(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }

  detalhes() {
    alert(
      `Título: ${this.titulo}\nAutor: ${this.autor}\nAno da publicação: ${this.anoPublicacao}`
    );
  }
}
