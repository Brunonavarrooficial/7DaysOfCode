const Nome = Prompt("Digite Seu Nome: ");
const Idade = prompt("Digite Quantos Anos você tem: ");
const Linguagem = prompt("Digite A Linguagem de Programação que Está Estudando: ");

console.log(`Olá ${Nome}, você tem ${Idade} anos e já está aprendendo ${Linguagem}!`);

const Gosto = prompt(`Você gosta de estudar ${Linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if (Gosto == 1){
    console.log("Muito bom! Continue estudando e você terá muito sucesso.");
}
if (Gosto == 2){
    console.log("Ahh que pena... Já tentou aprender outras linguagens?");
}

