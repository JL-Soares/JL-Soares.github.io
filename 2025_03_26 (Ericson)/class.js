export default class Carro {
  constructor(modelo, ano, marca) {
    this.modelo = modelo;
    this.ano = ano;
    this.marca = marca;
  }
  acelerar() {
    console.log("Acelerando...");
  }
}
