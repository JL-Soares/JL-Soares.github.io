import Animal from "./classe.js";

const animal1 = new Animal("gato", 3);
const animal2 = new Animal("Galinha", 10);
const animal3 = new Animal("Cavalo", 1);
const animal4 = new Animal("Capivara", 16);
// animal1.Resultados();

let mobs = [];
mobs.push(animal1);
let i = 0;
for (i = 0; i > mobs.length; i++) {
  alert(`${mobs}`);
}

// criar uma classe Animal com
//  os atributos nome e idade e um
// método que exibe esses atributos em um alerta.

// instanciar com o nome e idade de um animal
//
// import Animal from "./Animal.js";
// criar  animais e adincionar em um array
