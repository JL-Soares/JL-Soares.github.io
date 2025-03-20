import Produto from "./classe.js";

// const p1 = new Produto("Camiseta", 20, 3);

// alert(p1.nome);
// alert(p1.preco);
// alert(p1.estoque);

// p1.adicionarEstoque(10);

let opc = 0;
let produtos = [];

while (opc != 4) {
  opc = Number(
    prompt(
      "1 - Cadastrar produto \n2- Listar produtos \n3- Adicionar produto em estoque \n4- Sair"
    )
  );

  switch (opc) {
    case 1:
      let nome = prompt("Informe o nome do produto: ");
      let preco = Number(prompt("Informe o preço do produto: "));
      let estoque = Number(prompt("Informe o estoque do produto: "));

      const produto = new Produto(nome, preco, estoque);
      produtos.push(produto);
      alert("Produto cadastrado com sucesso");
      break;

    case 2:
      let listaProdutos = "";
      for (let i = 0; i < produtos.length; i++) {
        listaProdutos += `Item: ${i + 1} Nome: ${produtos[i].nome} Preço: ${
          produtos[i].preco
        } Estoque: ${produtos[i].estoque} \n`;
      }
      alert(listaProdutos);
      break;

    case 3:
      let indice = Number(prompt("Informe o índice do produto: "));
      let quantidade = Number(
        prompt("Informe a quantidade a ser adicionada: ")
      );
      produtos[indice - 1].adicionarEstoque(quantidade);
      alert("Estoque adicionado com sucesso");

      break;

    case 4:
      alert("Saindo do sistema");
      break;

    default:
      alert("Opção inválida");
      break;
  }
}
