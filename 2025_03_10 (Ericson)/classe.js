// criar uma classe conta bancaria com os seguintes atributos:
// nome do titular
// numero da conta = usar o Math.random() para gerar um numero aleatorio
// saldo = o saldo inicial do cliente.
// criar os metodos:
// sacar
// depositar
// saldo
export default class ContaBancaria {
  constructor(nome, saldo) {
    this.nome = nome;
    this.saldo = saldo;
    this.conta = Math.floor(Math.random() * 1000);
  }
  sacar(valor) {
    if (valor > this.saldo) {
      alert("Saldo insuficiente");
    } else {
      this.saldo -= valor;
      alert(`Saque de R$ ${valor} realizado com sucesso!`);
    }
  }
  depositar(valor) {
    this.saldo += valor;
    alert(`Depósito de R$ ${valor} realizado com sucesso!`);
  }
  extrato() {
    alert(`Nome: ${this.nome}\nConta: ${this.conta}\nSaldo: R$ ${this.saldo}`);
  }
}
