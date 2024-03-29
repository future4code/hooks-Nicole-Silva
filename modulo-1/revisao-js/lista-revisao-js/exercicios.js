// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaQuantidadeElementos(array) {
    return array.length;
  }

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (array[j] > array[j + 1]) {
          let tmp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tmp;
        }
      }
    }
    return array;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let novoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      novoArray.push(array[i]);
    }
  }
  return novoArray;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      novoArray.push(array[i] * array[i]);
    }
  }
  return novoArray;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0];
    for (let i = 0; i < array.length; i++) {
      if (maiorNumero < array[i]) {
        maiorNumero = array[i];
      }
    }
    return maiorNumero;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero;
  let menorNumero;
  let maiorDivisivelPorMenor;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;

  const diferenca = maiorNumero - menorNumero;

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
  };

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const novoArray = [];
    for (let number = 0; novoArray.length < n; number++) {
      if (number % 2 === 0) {
        novoArray.push(number);
      }
    }
    return novoArray;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (a !== b && b !== c) {
        return "Escaleno";
      } else if (a === b && b === c) {
        return "Equilátero";
      } else {
        return "Isósceles";
      }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let menor = Infinity;
    let maior = -Infinity;
    let segundoMenor = Infinity;
    let segundoMaior = -Infinity;
    let novoArray = [];
  
    for (let i of array) {
      if (i < menor) {
        menor = i;
      }
      if (i > maior) {
        maior = i;
      }
    }
  
    for (let i of array) {
      if (i < segundoMenor && i !== menor) {
        segundoMenor = i;
      }
      if (i > segundoMaior && i !== maior) {
        segundoMaior = i;
      }
    }
    novoArray.push(segundoMaior);
    novoArray.push(segundoMenor);
  
    return novoArray;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let atoresConcat = "";
    for (let i = 0; i < filme.atores.length; i++) {
      if (i === filme.atores.length - 1) {
        atoresConcat += filme.atores[i];
      } else {
        atoresConcat += filme.atores[i] + ", ";
      }
    }
  
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresConcat}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {
        ...pessoa,
        nome: "ANÔNIMO"
      };
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = [];
    for (const pessoa of pessoas) {
      if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
        pessoasAutorizadas.push(pessoa);
      }
    }
    return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = [];
    for (const pessoa of pessoas) {
      if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
        pessoasNaoAutorizadas.push(pessoa);
      }
    }
    return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.forEach((conta) => {
        let totalDeCompras = 0;
        conta.compras.forEach((valor) => {
          totalDeCompras += valor;
        });
        conta.saldoTotal -= totalDeCompras;
      });
      return contas;

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    for (let i = 0; i < consultasNome.length; i++) {
        for (let j = 0; j < consultasNome.length - i - 1; j++) {
          if (consultasNome[j].nome > consultasNome[j + 1].nome) {
            const temp = consultasNome[j];
            consultasNome[j] = consultasNome[j + 1];
            consultasNome[j + 1] = temp;
          }
        }
      }
      return consultasNome;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    for (let i = 0; i < consultasData.length; i++) {
        for (let j = 0; j < consultasData.length - i - 1; j++) {
          const arrayData1 = consultasData[j].dataDaConsulta.split("/");
          const dia1 = Number(arrayData1[0]);
          const mes1 = Number(arrayData1[1]);
          const ano1 = Number(arrayData1[2]);
    
          const arrayData2 = consultasData[j + 1].dataDaConsulta.split("/");
          const dia2 = Number(arrayData2[0]);
          const mes2 = Number(arrayData2[1]);
          const ano2 = Number(arrayData2[2]);
    
          const data1 = new Date(ano1, mes1 - 1, dia1).getTime();
          const data2 = new Date(ano2, mes2 - 1, dia2).getTime();
    
          if (data1 > data2) {
            const temp = consultasData[j];
            consultasData[j] = consultasData[j + 1];
            consultasData[j + 1] = temp;
          }
        }
      }
      return consultasData;
}