//Peso / (Altura x Altura)
nome = prompt(`Qual é o seu nome?`);
let verificacao = () => {
  document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();
  });
  let altura = Number(window.document.querySelector("#id_altura").value);
  let peso = Number(window.document.querySelector("#id_peso").value);
  let mensagem = "";

  IMC = peso / (altura * altura);
  mensagem =
    IMC < 18.5
      ? "Abaixo do peso normal"
      : IMC >= 18.5 && IMC < 25
      ? "Peso normal"
      : IMC >= 25 && IMC < 30
      ? "Excesso de peso"
      : IMC >= 30 && IMC < 35
      ? "Obesidade classe I"
      : IMC >= 35 && IMC < 40
      ? "Obesidade classe II"
      : IMC >= 40
      ? "Obesidade classe III"
      : "Erro";
  // if (IMC < 18.5) {
  //   mensagem = "Abaixo do peso normal";
  // } else if (IMC >= 18.5 && IMC < 25) {
  //   mensagem = "Peso normal";
  // } else if (IMC >= 25 && IMC < 30) {
  //   mensagem = "Excesso de peso";
  // } else if (IMC >= 30 && IMC < 35) {
  //   mensagem = "Obesidade classe I";
  // } else if (IMC >= 35 && IMC < 40) {
  //   mensagem = "Obesidade classe II";
  // } else if (IMC >= 40) {
  //   mensagem = "Obesidade classe III";
  // }
  saida =
    "Olá, " +
    nome +
    "! Seu IMC é " +
    IMC +
    " e sua classificação é " +
    mensagem +
    ".";
  if (peso != "" && altura != "" && IMC != "NaN") {
    id_resultado.innerHTML = saida;
  }
};
//console.log(false == 0 ? "IGUAL" : "NÃO IGUAL");
let detalhes = () => {
  let altura = Number(window.document.querySelector("#id_altura").value);
  let peso = Number(window.document.querySelector("#id_peso").value);
  IMC = peso / (altura * altura);
  if (IMC < 18.5) {
    mensagem = "Abaixo do peso normal";
  } else if (IMC >= 18.5 && IMC < 25) {
    mensagem = "Peso normal";
  } else if (IMC >= 25 && IMC < 30) {
    mensagem = "Excesso de peso";
  } else if (IMC >= 30 && IMC < 35) {
    mensagem = "Obesidade classe I";
  } else if (IMC >= 35 && IMC < 40) {
    mensagem = "Obesidade classe II";
  } else if (IMC >= 40) {
    mensagem = "Obesidade classe III";
  }
  detalhe = `Os seguinte detalhes do calculo do IMC:<br/><br/> Nome: ${nome}<br/>Altura: ${altura}<br/>Peso: ${peso}<br/>Classificação: ${mensagem}`;
  if (peso != "" && altura != "" && IMC != "NaN") {
    id_detalhes.innerHTML = detalhe;
  }
};
let limpar = () => {
  a = 0;
  if (a == 0) {
    id_;
  }
};
