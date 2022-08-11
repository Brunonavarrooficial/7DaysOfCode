console.log('Escolha Seu Numero da Sorte!!!');
let numSelecionado = prompt('Escolha entre 0 á 100');

const numSorte = parseInt(Math.floor(Math.random() * (100 - 0 + 1) + 0));

if (numSelecionado !== numSorte) {
  for (let i = 1; i < 20; i++) {
    if (numSelecionado < numSorte) {
      console.log(`${numSelecionado} é menor que o Numero Desejado, Tente Novamente:`);
      console.log(`Essa foi sua ${i} tentativa você tem o total de 20`);
      numSelecionado = prompt('Escolha entre 0 á 100');
    } else if (numSelecionado > numSorte){
      console.log(`${numSelecionado} é maior que o Numero Desejado, Tente Novamente:`);
      console.log(`Essa foi sua ${i} tentativa você tem o total de 20`);
      numSelecionado = prompt('Escolha entre 0 á 100');
    }else if(numSelecionado == numSorte){
      console.log(`Parabéns você Acertou é o numero Secreto: ${numSorte} precisou de ${i} Tentativas!! `);
      break;
    }    
  }
} 


if (numSelecionado == numSorte) {
  console.log(`Parabéns por Finalizar e Acertar o Numero Secreto: ${numSorte} Volte Sempre!`);
} else {
  console.log(`Infelizmente não foi desta vez,o Numero era ${numSorte} Tente Novamente do inicio!`);
}
