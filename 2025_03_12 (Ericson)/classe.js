export default class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  Resultados() {
    alert(`O animal ${this.nome} tem ${this.idade} anos.`);
  }
}

// criar uma classe Animal com
//  os atributos nome e idade e um
// método que exibe esses atributos em um alerta.

// instanciar com o nome e idade de um animal
//
// import Animal from "./Animal.js";
// criar  animais e adicionar em um array
