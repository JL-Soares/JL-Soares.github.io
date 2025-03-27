export default class Filme {
  constructor(titulo, diretor, ano) {
    this.titulo = titulo;
    this.diretor = diretor;
    this.ano = ano;
  }

  exibirInfo() {
    alert(`Título: ${this.titulo}\nDiretor: ${this.diretor}\nAno: ${this.ano}`);
  }
}
