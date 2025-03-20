import ContaBancaria from "./classe.js";

// const c1 = new ContaBancaria("Mario", 1000);

// c1.sacar(500);

// c1.depositar(200);

// c1.extrato();

// const c2 = new ContaBancaria("Luigi", 500);

// c2.sacar(1000);

// c2.depositar(300);

// c2.extrato();

let opc = 0;
const contas = [];

while (opc !== 5) {
  opc = Number(
    prompt(
      "1 - Cadastrar conta\n2 - Sacar\n3 - Depositar\n4 - Extrato\n5 - Sair\nDigite a opção desejada:"
    )
  );
  switch (opc) {
    case 1:
      const nome = prompt("Digite o nome do titular:");
      const saldo = Number(prompt("Digite o saldo inicial:"));

      const conta = new ContaBancaria(nome, saldo);

      contas.push(conta);

      break;
    case 2:
      const numero = Number(prompt("Digite o número da conta:"));
      const valorSaque = Number(prompt("Digite o valor do saque:"));

      const contaSaque = contas.find((conta) => conta.conta === numero);

      if (contaSaque) {
        contaSaque.sacar(valorSaque);
      } else {
        alert("Conta não encontrada!");
      }

      break;
    case 3:
      const numeroDeposito = Number(prompt("Digite o número da conta:"));
      const valorDeposito = Number(prompt("Digite o valor do depósito:"));

      const contaDeposito = contas.find(
        (conta) => conta.conta === numeroDeposito
      );

      if (contaDeposito) {
        contaDeposito.depositar(valorDeposito);
      } else {
        alert("Conta não encontrada!");
      }

      break;
    case 4:
      const numeroExtrato = Number(prompt("Digite o número da conta:"));

      const contaExtrato = contas.find(
        (conta) => conta.conta === numeroExtrato
      );

      if (contaExtrato) {
        contaExtrato.extrato();
      } else {
        alert("Conta não encontrada!");
      }

      break;
    case 5:
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida!");
  }
}
