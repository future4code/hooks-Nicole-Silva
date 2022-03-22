// Exercício de interpretação de código
// 1 - a - No console vai ser impresso o item, o indice e o array.

// 2 - a - Vai ser impresso no console o item nome

// 3 - a - Os itens em que os apelidos forem diferentes de Chijo

// Exercício de escrita de código
// 1 - 
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
 const arrayNome = pets.map((item) => {
    return item.nome
 })
 
 console.log(arrayNome)

 const arraySalsicha = pets.filter((item) => {
    return item.raca === "Salsicha"
 })
 
 console.log(arraySalsicha)
const arrayPoodle = pets.filter((item) => {
    return item.raca === 'Poodle'
})
console.log(arrayPoodle)

const arrayDesconto = arrayPoodle.map((item) => {
return item.nome
})
console.log (`Você ganhou um cupom de desconto de 10% para tosar o/a ${nome}!`)

// 2 - 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const arrayNome = produtos.map((item) => {
         return item.nome
      })
        console.log(arrayNome)

const arrayDesconto = produtos.map((item) => {
    return item.nome
})