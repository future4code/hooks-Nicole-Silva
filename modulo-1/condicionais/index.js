// Exercícios de interpretação de código
//1
//a - O código testa se o número é par ou não, e ele te dá o resultado se o número passou ou não no teste.
//b - Para números pares
//c - Para números ímpares

//2
//a - Para dar o preço das frutas
//b - O preço da fruta  Maçã  é  R$  2.25
//c - O preço da fruta  Perâ  é  R$  5

//3
//a - A primeira linha está abrindo uma janela para que o usuário digite um número.
//b - Se digitar o número 10: Esse número passou no teste. Se digitar -10: mensagem is not defined
//c - 

//Exercício de escrita de código
//1
const idade = Number(prompt("Digite a sua idade"))

if(idade >= 18) {
    console.log("Você pode dirigir.")
} else{
    console.log("Você não pode dirigir.")
}

//2
const turno = prompt("Que turno do dia você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")

function seuTurno(turno) {

    if (turno === M) {
    console.log("Bom dia!");
  } else if (turno === V) {
    console.log("Boa tarde!");
  } else if (turno === N) {
      console.log("Boa noite!");
  }

}
seuTurno(turno)

//3

const turno1 = prompt("Que turno do dia você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
switch (turno1) {
  case "M":
    turno2 = "Bom dia!"
    break;
  case "V":
    turno2 = "Boa tarde!"
    break;
  case "N":
    turno2 = "Boa noite!"
    break;
  
}
console.log(turno2)

//4
const genero = prompt("Qual o gênero do filme?");
const ingresso = prompt("Qual o valor do ingresso?");

if (genero.toLowerCase() === "fantasia" && ingresso <= 15) {
  console.log("Bom filme!");
} else {
  console.log("Escolha outro filme!");
}

