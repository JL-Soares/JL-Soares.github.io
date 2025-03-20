import Carro from "./classe.js";

const c1 = new Carro("Fiat", "Uno", 2002, 12000);

// alert(c1.ano);
// alert(c1.marca);
// alert(c1.modelo);
// alert(c1.valor);
// c1.detalhes();
const c2 = new Carro("Chevrolet", "Onix", 2018, 40000);

// alert(c2.ano);
// alert(c2.modelo);
// alert(c2.marca);
// alert(c2.valor);
// c2.detalhes();

const carros = [];

carros.push(c1);
carros.push(c2);

// alert(carros[0].ano);
// alert(carros[0].marca);
// alert(carros[0].modelo);
// alert(carros[0].valor);
// carros[0].detalhes();

// alert(carros[1].ano);
// alert(carros[1].marca);
// alert(carros[1].modelo);
// alert(carros[1].valor);
// carros[1].detalhes();

carros.push(new Carro("Volkswagen", "Gol", 2010, 25000));

// alert(carros[2].ano);
// alert(carros[2].marca);
// alert(carros[2].modelo);
// alert(carros[2].valor);
// carros[2].detalhes();

let marca = "Jeep";
let modelo = "Renegade";
let ano = 2021;
let valor = 100000;

const c4 = new Carro(marca, modelo, ano, valor);

carros.push(c4);

carros.push(new Carro(marca, modelo, ano, valor));

carros[3].valor = 50000;

for (let i = 0; i < carros.length; i++) {
  carros[i].detalhes();
}

// criar uma classe Animal com
//  os atributos nome e idade e um
// método que exibe esses atributos em um alerta.

// instanciar com o nome e idade de um animal
//
// import Animal from "./Animal.js";
// criar  animais e adincionar em um array
