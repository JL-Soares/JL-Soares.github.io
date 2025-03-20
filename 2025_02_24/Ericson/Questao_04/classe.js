export default class Jogo {
  constructor(nome, genero, preco) {
    this.nome = nome;
    this.genero = genero;
    this.preco = preco;
  }

  detalhes() {
    alert(
      `Nome: ${this.nome}\nGênero: ${this.genero}\nPreço: R$ ${this.preco}`
    );
  }
}
