console.log(" Escolha Seu Destino!!! ");

const Area = prompt("Qual área Deseja Atuar? Digite 1 p/ BackEnd ou 2 p/ FrontEnd?");
let linguagem = null;
let listTech = [];

if (Area == 1){
    linguagem = prompt("Programar em C# ou Java?");
    console.log(`Muito Sucesso na Sua Carreira em ${linguagem}`);
}else if(Area == 2){
    linguagem = prompt("Framework React ou Vue?");
    console.log(`Muito Sucesso na Sua Carreira em ${linguagem}`);
}else{
    console.log("Escolha Invalida");
}

let Desejo  = prompt(`Deseja Aprender Mais Alguma Tecnologia? 1 p/ sim 2 p/ não `);

while (Desejo === '1') {
    const Escolha = prompt('Digite Qual Tech Deseja Acrecentar: ');
    listTech.push(Escolha);
    Desejo  = prompt(`Deseja Aprender Mais Alguma Tecnologia? 1 p/ sim 2 p/ não `);    
}

console.log(`Esse é seu futuro em Programação!!`);
console.log(`Muito Sucesso em Suas Escolha de Tecnologia`);
console.log(`sua primeira escolha foi ${linguagem}`);
console.log(`complementos Escolhidos Foram: `);
console.log(listTech);