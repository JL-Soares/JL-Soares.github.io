export default class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  desconto(porcentagem) {
    let valor_final = 0;
    valor_final = this.preco - this.preco * (porcentagem / 100);
    alert(`O Valor final do produto é: ${valor_final}`);
  }
}
