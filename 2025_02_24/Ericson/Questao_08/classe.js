export default class Cachorro {
  constructor(nome, raca, idade) {
    this.nome = nome;
    this.raca = raca;
    this.idade = idade;
  }

  latir() {
    alert(`Au au! ${this.nome} está latindo!`);
  }
}
