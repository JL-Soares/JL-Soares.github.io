import Jogo from "./classe.js";

// const j1 = new Jogo("Super Mario", "Plataforma", 40);

// const j2 = new Jogo("GTA V", "Ação", 120);

// const j3 = new Jogo("The Sims", "Simulação", 80);

// let nome = "Mario"
// let  genero = "plataforma"
// let preco = 1000

// const j4 = new Jogo(nome, genero, preco);
// j1.detalhes();
// j2.detalhes();
// j3.detalhes();

// const jogos = [];

// jogos.push(j1, j2, j3);

// jogos[0].detalhes();
// jogos[1].detalhes();
// jogos[2].detalhes();

// Cadastro de jogos

let opc = 0;
const jogos = [];

while (opc !== 3) {
  opc = Number(
    prompt(
      "1 - Cadastrar jogo\n2 - Listar jogos\n3 - Sair\nDigite a opção desejada:"
    )
  );

  switch (opc) {
    case 1:
      const nome = prompt("Digite o nome do jogo:");
      const genero = prompt("Digite o gênero do jogo:");
      const preco = Number(prompt("Digite o preço do jogo:"));

      const jogo = new Jogo(nome, genero, preco);

      jogos.push(jogo);

      break;
    case 2:
      for (let i = 0; i < jogos.length; i++) {
        jogos[i].detalhes();
      }
      break;
    case 3:
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida!");
  }
}

let numero = Math.floor(Math.random() * 1000);

// criar uma classe conta bancaria com os seguintes atributos:
// nome do titular
// numero da conta = usar o Math.random() para gerar um numero aleatorio
// saldo = o saldo inicial do cliente.
// criar os metodos:
// sacar
// depositar
// saldo
