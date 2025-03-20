//Operadores Aritméticos
// +, -, *, /, %, **
let a = 5 + 5; // Adição
let s = 4 - 4; // Subtração
let m = 5 * 5; // Multiplicação
let d = 5 / 2; // Divisão
let e = 2 ** 3; // Exponenciação é uma operação que consiste em multiplicar um número por ele mesmo várias vezes.
let r = 4 % 2; // Calcula o resto de uma divisão, também conhecido como operação módulo.

//Operadores de atribuição
let x = 0;
x += 1; // x = x + 1;
x -= 1; // x = x - 1;
x *= 1; // x = x * 1;
x /= 1; // x = x / 1;
x **= 2; // x = x ** 2;
x %= 1; // || x = x % 1;

// Precendências: (), **, * / %, + -
let precedencia = (3 + 3) * 2 - (4 / 2 + 5);
console.log(precedencia);

// OPERADORES BOOLEANOS

/*FALSE
Quando um valor é considerado false em contextos onde um booleano é
obrigatório (condicionais e loops)
false, 0, -0, """, null, undefined e NaN
todos retornaram falso
*/

/*TRUE
Quando um valor é considerado true em contextos onde um booleano é obrigatório
condicionais e loops
true, {}, [], 1, 3.23, "0", "false", -1, Infinity, -Infinity
*/

//Operadores logicos
//valores booleanos, que quando verificado resulta em true ou false
let pao = true;
let queijo = false;
//AND &&
// console.log(pao && queijo) //se um dos dois forem falsos, assim o valor será falso
//OR ||
// console.log(pao || queijo) //quando os dois for falso
//NOT !
// console.log(!pao) //nega e troca o valor
// console.log(!queijo) //nega e troca o valor

const padaria = {
  pao: 1,
  bolo: 1,
};

if (padaria.pao && padaria.bolo) {
  console.log("O menino voltou para casa!");
} else {
  console.log("O menino NÃO voltou para casa!");
}

console.log(
  padaria.pao && padaria.bolo
    ? "O menino voltou para casa!"
    : "O menino voltou para casa!"
);

// TENÁRIO é um  tipo de operador condicional ternário
// condicao ? verdadeiro : falso
// console.log(0 ? "verdadeiro": "falso")
