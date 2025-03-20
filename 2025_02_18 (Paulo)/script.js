//<18 inapto 18+ apto
//18 a 50 anos renovação de cnh a cada 10 anos, 60 anos e a cada 5 ano, 70 anos a cada 3 anos

let verificar2 = () => {
  let numero2 = Number(window.document.querySelector("#id_numero2").value);
  let resultado2 = document.getElementById("id_resultado2");
  let resultado3 = document.getElementById("id_resultado3");

  if (numero2 < 18 || numero2 >= 100) {
    resultado2.innerHTML = "INAPTO PARA INÍCIO";
  } else if (numero2 > 18 && numero2 < 100) {
    resultado2.innerHTML = "APTO PARA INÍCIO";
  }
  if (numero2 < 18 || numero2 >= 100) {
    resultado3.innerHTML = "";
  } else if (numero2 > 18 && numero2 < 50) {
    resultado3.innerHTML =
      "Você fará a renovação da habilitação a cada 10 anos";
  } else if (numero2 >= 50 && numero2 <= 69) {
    resultado3.innerHTML = "Você fará a renovação da habilitação a cada 5 anos";
  } else if (numero2 >= 70) {
    resultado3.innerHTML = "Você fará a renovação da habilitação a cada 3 anos";
  }
};
