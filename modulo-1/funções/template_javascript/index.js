// Exercício de interpretação de código
// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

//1. Leia o código abaixo
    

//function minhaFuncao(variavel) {
  //  return variavel * 5
//}

//console.log(minhaFuncao(2))
//console.log(minhaFuncao(10))


//a) O que vai ser impresso no console?
//10
//50

//b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// Daria um errro pois não está imprimindo a função do console

//2. Leia o código abaixo
    
    
    //let textoDoUsuario = prompt("Insira um texto");
    
    //const outraFuncao = function(texto) {
    //	return texto.toLowerCase().includes("cenoura")
    //}
    
    //const resposta = outraFuncao(textoDoUsuario)
    //console.log(resposta)
    
    
    //a. Explique o que essa função faz e qual é sua utilidade
    // A função deixa todas as letras em minúscula para identificar sempre a palavra cenoura.
    
    //b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         //i.   `Eu gosto de cenoura`
         // true
         //ii.  `CENOURA é bom pra vista`
         // true
         //iii. `Cenouras crescem na terra`
         // true

         // Exercício de escrita de código

         //1. Escreva as funções explicadas abaixo:
    
    //a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
    // "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    //Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
    
const nome = `Nicole`
const idade = `34`
const cidade = `Promissão`
const profissao = `estudante`

function imprimaMinhasInformacoes()
{
console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}
imprimaMinhasInformacoes()

    //b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

  function imprimirInformacoes(nome, idade, endereço, profissao) {
  console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissao}.`)
  }
  imprimirInformacoes("Nicole", 34, "Rua Maria da Silva Lima 56", "estudante")

    //2. Escreva as funções explicadas abaixo:
    
  //a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
  function soma(numero1, numero2) {
  return numero1 + numero2
  }
  console.log(soma(2, 4))

    //b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    
  function comparaçao(numero1, numero2) {
  return numero1 >= numero2
  }
  console.log(comparaçao(2,4))
    
  //c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
  function par(numero) {
  return (numero%2===0)
  }
  console.log(par(4))

    //d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
    
    function tamanhoString(string) {
      return `A mensagem ${string.toUpperCase() }
     contém ${string.length} caracteres`
    }
console.log(tamanhoString("Cristo vivo está"))

    // 3 - Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

  function somar (numero1, numero2) {
  return numero1 + numero2
  }

  function subtração (numero1, numero2){
  const subtrair = numero1 - numero2  
  return subtrair
  }

    
  function multiplicação (numero1, numero2) {
  let multiplicar = numero1 * numero2
  return multiplicar
  }

  function divisão (numero1, numero2) {
  let dividir = numero1 / numero2
  return dividir
  }

  let primeiroNumero = Number(prompt("Digite um número"))
  let segundoNumero = Number(prompt("Digite outro numero"))

  console.log(`Numeros inseridos: ${primeiroNumero}, ${segundoNumero} `)
  console.log("Soma:", somar(primeiroNumero, segundoNumero))
  console.log("Subtração:", subtração (primeiroNumero, segundoNumero))
  console.log("Multiplicação:", multiplicação(primeiroNumero, segundoNumero))
  console.log("Divisão:", divisão(primeiroNumero, segundoNumero))

  //Desafios
  //1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
    //a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
      const arrow = (parametros) => {
      console.log(parametros)
    }
    
    //b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo
      const somando = (numero1, numero2) => {
      const somado = numero1 + numero2; 
      console.log(somado);

    };
    somando(5, 3);

    // 2 - Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console.
    const pitagoras = (cateto1, cateto2) => {  
    Math.hypot(cateto1, cateto2)
    }

     