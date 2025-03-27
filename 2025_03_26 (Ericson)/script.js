import PromptSync from "prompt-sync";
import Carro from "./class.js";

const prompt = PromptSync();

const modelo = prompt("Digite o modelo do carro: ");
const ano = Number(prompt("Digite o ano do carro: "));
const marca = prompt("Digite a marca do carro: ");

const carro = new Carro(modelo, ano, marca);

// console.log("Carro criado com sucesso!");
// console.log("Características do carro:");
// console.log(carro.ano);
// console.log(carro.modelo);
// console.log(carro.marca);

//Instanciar 10 carros e depois armazenar em um array

const carros = [];

for (let i = 0; i < 10; i++) {
  const modelo = prompt("Digite o modelo do carro: ");
  const ano = Number(prompt("Digite o ano do carro: "));
  const marca = prompt("Digite a marca do carro: ");

  const carro = new Carro(modelo, ano, marca);

  carros.push(carro);

  console.log("Carro criado com sucesso!");
}
