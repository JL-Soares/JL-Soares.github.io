class Cachorro {
  constructor(nome, raca, idade) {
    this.nome = nome;
    this.raca = raca;
    this.idade = idade;
  }
  latir() {
    return `${this.nome} está latindo`;
  }
  correr() {
    return `${this.nome} está correndo`;
  }
}
const cachorro1 = new Cachorro("Rex", "Labrador", "3");
const cachorro2 = new Cachorro("Bella", "Poodle", "5");

console.log(cachorro1.nome);
console.log(cachorro2.raca);
console.log(cachorro1.idade);

console.log(cachorro1.latir());
console.log(cachorro1.correr());
