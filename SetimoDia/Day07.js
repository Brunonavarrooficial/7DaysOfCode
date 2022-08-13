console.log('Calculadora Js');
console.log('Escolha os dois numeros para as operações')
let num1 = prompt('Digite o primeiro numero que deseja calcular');
let num2 = prompt('Digite o segundo numero que deseja calcular');
console.log('Escolha Qual Função Deseja Realizar');
let escolha = prompt('1.Divisão 2.Multiplicação 3.Soma 4.Subtração');

if (escolha === '1') {
  let resultado = num1 / num2;
  console.log(`Resultado da divisão é: ${resultado}`);
} else if (escolha === '2') {
  let resultado = num1 * num2;
  console.log(`Resultado da multiplicação é: ${resultado}`);
} else if (escolha === '3') {
  let resultado = parseInt(num1) + parseInt(num2);
  console.log(`Resultado da soma é: ${resultado}`);
} else if (escolha === '4') {
  let resultado = num1 - num2;
  console.log(`Resultado da subtração é: ${resultado}`);
} else {
  console.log('valor invalido');
}