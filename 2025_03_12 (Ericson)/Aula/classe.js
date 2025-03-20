export default class Carro {
  constructor(marca, modelo, ano, valor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.valor = valor;
  }

  detalhes() {
    alert(
      `Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nValor: R$ ${this.valor}`
    );
  }
}
