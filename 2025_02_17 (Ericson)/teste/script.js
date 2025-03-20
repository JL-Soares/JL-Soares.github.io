import { Pessoa } from "./classe.js";

// const pessoa1 = new Pessoa("Lucas", 25);

// alert(pessoa1.nome); // Lucas
let nome = prompt("Digite o nome da pessoa:");
let idade = Number(prompt("Digite a idade da pessoa:"));

const p1 = new Pessoa(nome, idade);

alert(`Nome: ${p1.nome} \nIdade: ${p1.idade}`); // Nome: Lucas Idade: 25
