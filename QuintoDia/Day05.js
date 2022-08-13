let frutas = [];
let = laticinios = [];
let = carnes = [];
let = bebidas = [];

console.log('Seja Bem-vindo Ao Mercado Mais ++');
console.log('O melhor preço da região');
let continuar = prompt('Podemos Proseguir com o pedido? 1 p/ sim e 2 p/ não');

while (continuar === '1') {
  console.log('Temos os Setores de frutas, laticinios, carnes e bebidas');
  let sectorSelect = prompt('Digite Qual setor deseja?');
  if (sectorSelect === 'frutas') {
    let Escolha = prompt('Digite Qual fruta deseja: ');
    frutas.push(Escolha);
    continuar = prompt(`Deseja Continuiar comprando? 1 p/ sim 2 p/ não `);
  } else if (sectorSelect === 'laticinios') {
    let Escolha = prompt('Digite Qual laticinio deseja: ');
    laticinios.push(Escolha);
    continuar = prompt(`Deseja Continuiar comprando? 1 p/ sim 2 p/ não `);
  } else if (sectorSelect === 'carnes') {
    let Escolha = prompt('Digite Qual carne deseja: ');
    carnes.push(Escolha);
    continuar = prompt(`Deseja Continuiar comprando? 1 p/ sim 2 p/ não `);
  } else if (sectorSelect === 'bebidas') {
    let Escolha = prompt('Digite Qual bebida deseja: ');
    bebidas.push(Escolha);
    continuar = prompt(`Deseja Continuiar comprando? 1 p/ sim 2 p/ não `);
  } else {
    console.log('Valor invalido, Tente novamente');
  }
}
console.log('');
console.log('');
console.log('Suas Compras Foram: ');
console.log(`Frutas: ${frutas}`);
console.log(`carnes: ${carnes}`);
console.log(`Laticínios: ${laticinios}`);
console.log(`Bebidas: ${bebidas}`);
console.log(`Muito Obrigado!!!`);
console.log(`Volte Sempre!!!`);


