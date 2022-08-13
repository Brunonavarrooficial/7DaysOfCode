//let frutas = ['banana', 'maça', 'morango', 'uva', 'melância']
let frutas = [];
let = laticinios = [];
let = carnes = [];
let = bebidas = [];


console.log('Seja Bem-vindo Ao Mercado Mais ++');
console.log('O melhor preço da região');
let continuar = prompt('Podemos Proseguir com o pedido? 1 p/ sim e 2 p/ finalizar 3 p/ remover item');

//setor de compras
while (continuar === '1') {
  console.log('Temos os Setores de frutas, laticinios, carnes e bebidas');
  let sectorSelect = prompt('Digite Qual setor deseja?');
  if (sectorSelect === 'frutas') {
    let Escolha = prompt('Digite Qual fruta deseja: ');
    frutas.push(Escolha);
    continuar = prompt(`Deseja Continuiar comprando? 1 p/ sim 2 p/ não ou 3 p/ remover item`);
  } else if (sectorSelect === 'laticinios') {
    let Escolha = prompt('Digite Qual laticinio deseja: ');
    laticinios.push(Escolha);
    continuar = prompt(`Deseja Continuiar comprando? 1 p/ sim 2 p/ não ou 3 p/ remover item`);
  } else if (sectorSelect === 'carnes') {
    let Escolha = prompt('Digite Qual carne deseja: ');
    carnes.push(Escolha);
    continuar = prompt(`Deseja Continuiar comprando? 1 p/ sim 2 p/ não ou 3 p/ remover item`);
  } else if (sectorSelect === 'bebidas') {
    let Escolha = prompt('Digite Qual bebida deseja: ');
    bebidas.push(Escolha);
    continuar = prompt(`Deseja Continuiar comprando? 1 p/ sim 2 p/ não ou 3 p/ remover item`);
  } else {
    console.log('Valor invalido, Tente novamente');
  }

}

//setor de delete
while (continuar === '3') {
  console.log('Deseja remover Algo de Alguma lista do setor da compra?');
  console.log('Temos os Setores de frutas, laticinios, carnes e bebidas');
  continuar = prompt('Digite 3 p/ remover item ou 1 p/ voltar as compras? ou 2 p/ Finalizar Pedidos');
  if (continuar === '3') {
    let sectorSelect = prompt('Digite Qual setor deseja remover item?');
    if (sectorSelect === 'frutas') {
      let Escolha = prompt('Digite Qual fruta deseja remover: ');
      frutas.splice(frutas.indexOf(Escolha), 1);
      console.log(`Lista atual de frutas: ${frutas}`);
      continuar = prompt(`Deseja Continuar Removendo Itens?  3 p/ sim 1/ p/ voltar as compras`);
      if (continuar === '3') {
        console.log('voltando a remoção');
      } else {
        console.log('retorno ao menu Desejado');
        menuInicial();
      }
    } else if (sectorSelect === 'laticinios') {
      let Escolha = prompt('Digite Qual laticinio deseja remover: ');
      laticinios.splice(Escolha);
      console.log(`Lista atual de Laticínios: ${laticinios}`);
      continuar = prompt(`Deseja Continuar Removendo Itens?  3 p/ sim 1/ p/ voltar as compras`);
      if (continuar === '3') {
        console.log('voltando a remoção');
      } else {
        console.log('retorno ao menu Desejado');
        menuInicial();
      }
    } else if (sectorSelect === 'carnes') {
      let Escolha = prompt('Digite Qual carne deseja remover: ');
      carnes.splice(Escolha);
      console.log(`Lista atual de Carnes: ${carnes}`);
      continuar = prompt(`Deseja Continuar Removendo Itens?  3 p/ sim 1/ p/ voltar as compras`);
      if (continuar === '3') {
        console.log('voltando a remoção');
      } else {
        console.log('retorno ao menu Desejado');
        menuInicial();
      }
    } else if (sectorSelect === 'bebidas') {
      let Escolha = prompt('Digite Qual bebida deseja remover: ');
      bebidas.splice(Escolha);
      console.log(`Lista atual de Bebidas: ${bebidas}`);
      continuar = prompt(`Deseja Continuar Removendo Itens?  3 p/ sim 1/ p/ voltar as compras`);
      if (continuar === '3') {
        console.log('voltando a remoção');
      } else {
        console.log('retorno ao menu Desejado');
        menuInicial();
      }
    } else {
      console.log('Valor invalido, Tente novamente');
    }
  } else if (continuar === '1') {
    console.log('retorno ao menu inicial');
    menuInicial();
  } else {
    console.log('Menu de Finalização de Compra');
  }


}

//setor de finalização
while (continuar === '2') {
  continuar = prompt('Deseja Finalizar Digite 4 ou 1 p/ voltar ao menu inicial');
  if (continuar === '4') {
    console.log('');
    console.log('');
    console.log('Suas Compras Foram: ');
    console.log(`Frutas: ${frutas}`);
    console.log(`carnes: ${carnes}`);
    console.log(`Laticínios: ${laticinios}`);
    console.log(`Bebidas: ${bebidas}`);
    console.log(`Muito Obrigado!!!`);
    console.log(`Volte Sempre!!!`);
  } else {
    console.log('retornando ao menu inicial');
    menuInicial();
  }
}

//setor de retorno menu inicial compra e delete
function menuInicial() {
  let continuar = prompt('Podemos Proseguir com o pedido? 1 p/ sim e 2 p/ finalizar 3 p/ remover item');
  while (continuar === '1') {
    console.log('Temos os Setores de frutas, laticinios, carnes e bebidas');
    let sectorSelect = prompt('Digite Qual setor deseja?');
    if (sectorSelect === 'frutas') {
      let Escolha = prompt('Digite Qual fruta deseja: ');
      frutas.push(Escolha);
      continuar = prompt(`Deseja Continuiar comprando? 1 p/ sim 2 p/ não ou 3 p/ remover item`);
      if (continuar === '2') {
        console.log('Menu de finalização');        
      } else {
        console.log('Menu de Remoção');
      }
    } else if (sectorSelect === 'laticinios') {
      let Escolha = prompt('Digite Qual laticinio deseja: ');
      laticinios.push(Escolha);
      continuar = prompt(`Deseja Continuiar comprando? 1 p/ sim 2 p/ não ou 3 p/ remover item`);
      if (continuar === '2') {
        console.log('Menu de finalização');        
      } else {
        console.log('Menu de Remoção');
      }
    } else if (sectorSelect === 'carnes') {
      let Escolha = prompt('Digite Qual carne deseja: ');
      carnes.push(Escolha);
      continuar = prompt(`Deseja Continuiar comprando? 1 p/ sim 2 p/ não ou 3 p/ remover item`);
      if (continuar === '2') {
        console.log('Menu de finalização');        
      } else {
        console.log('Menu de Remoção');
      }
    } else if (sectorSelect === 'bebidas') {
      let Escolha = prompt('Digite Qual bebida deseja: ');
      bebidas.push(Escolha);
      continuar = prompt(`Deseja Continuiar comprando? 1 p/ sim 2 p/ não ou 3 p/ remover item`);
      if (continuar === '2') {
        console.log('Menu de finalização');        
      } else {
        console.log('Menu de Remoção');
      }
    } else {
      console.log('Valor invalido, Tente novamente');
    }

  }


  while (continuar === '3') {
    console.log('Deseja remover Algo de Alguma lista do setor da compra?');
    console.log('Temos os Setores de frutas, laticinios, carnes e bebidas');
    continuar = prompt('Digite 3 p/ remover item ou 1 p/ voltar as compras? ou 2 p/ Finalizar Pedidos');
    if (continuar === '3') {
      let sectorSelect = prompt('Digite Qual setor deseja remover item?');
      if (sectorSelect === 'frutas') {
        let Escolha = prompt('Digite Qual fruta deseja remover: ');
        frutas.splice(frutas.indexOf(Escolha), 1);
        console.log(`Lista atual de frutas: ${frutas}`);
        continuar = prompt(`Deseja Continuar Removendo Itens?  3 p/ sim 1/ p/ voltar as compras`);
        if (continuar === '3') {
          console.log('voltando a remoção');
        } else {
          console.log('retorno ao menu Desejado');
          menuInicial();
        }
      } else if (sectorSelect === 'laticinios') {
        let Escolha = prompt('Digite Qual laticinio deseja remover: ');
        laticinios.splice(Escolha);
        console.log(`Lista atual de Laticínios: ${laticinios}`);
        continuar = prompt(`Deseja Continuar Removendo Itens?  3 p/ sim 1/ p/ voltar as compras`);
        if (continuar === '3') {
          console.log('voltando a remoção');
        } else {
          console.log('retorno ao menu Desejado');
          menuInicial();
        }
      } else if (sectorSelect === 'carnes') {
        let Escolha = prompt('Digite Qual carne deseja remover: ');
        carnes.splice(Escolha);
        console.log(`Lista atual de Carnes: ${carnes}`);
        continuar = prompt(`Deseja Continuar Removendo Itens?  3 p/ sim 1/ p/ voltar as compras`);
        if (continuar === '3') {
          console.log('voltando a remoção');
        } else {
          console.log('retorno ao menu Desejado');
          menuInicial();
        }
      } else if (sectorSelect === 'bebidas') {
        let Escolha = prompt('Digite Qual bebida deseja remover: ');
        bebidas.splice(Escolha);
        console.log(`Lista atual de Bebidas: ${bebidas}`);
        continuar = prompt(`Deseja Continuar Removendo Itens?  3 p/ sim 1/ p/ voltar as compras`);
        if (continuar === '3') {
          console.log('voltando a remoção');
        } else {
          console.log('retorno ao menu Desejado');
          menuInicial();
        }
      } else {
        console.log('Valor invalido, Tente novamente');
      }
    } else if (continuar === '1') {
      console.log('retorno ao menu inicial');
      menuInicial();
    } else {
      console.log('Menu de Finalização de Compra');
    }


  }

  while (continuar === '2') {
  continuar = prompt('Deseja Finalizar Digite 4 ou 1 p/ voltar ao menu inicial');
  if (continuar === '4') {
    console.log('');
    console.log('');
    console.log('Suas Compras Foram: ');
    console.log(`Frutas: ${frutas}`);
    console.log(`carnes: ${carnes}`);
    console.log(`Laticínios: ${laticinios}`);
    console.log(`Bebidas: ${bebidas}`);
    console.log(`Muito Obrigado!!!`);
    console.log(`Volte Sempre!!!`);
  } else {
    console.log('retornando ao menu inicial');
    menuInicial();
  }
}

}




//console.log('Deseja Voltar para as compras ou Excluir items?');
//continuar = prompt('Deseja Finalizar Digite 2 ou 3 p/ remover item ou 1 p/ Continuar comprando');



