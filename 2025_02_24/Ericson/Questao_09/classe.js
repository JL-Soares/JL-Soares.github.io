export default class Celular {
  constructor(marca, modelo, bateria) {
    this.marca = marca;
    this.modelo = modelo;
    this.bateria = bateria;
  }

  usar(tempo) {
    this.bateria = this.bateria - 0.038333333 * tempo;
    alert(`Bateria tem ${this.nome}kW restante.`);
  }
}
// Crie uma classe Celular com os atributos marca, modelo e bateria.
// Adicione um método usar(tempo) que reduza a bateria com base no tempo de uso e exiba um alerta com o nível de bateria restante.
