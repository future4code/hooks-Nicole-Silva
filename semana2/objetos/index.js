//Exercício de interpretação de código
// 1 - a

//Matheus Nachtergaele
//Virginia Cavendish
//{canal: "Globo", horario: "14h"}

//2 - a 

//{nome: 'Juca', idade: 3, raca: 'SRD'}
//{nome: 'Juba', idade: 3, raca: 'SRD'}
//{nome: 'Jubo', idade: 3, raca: 'SRD'}

// b
//Ela copia todo o objeto para dentro do novo objeto

// 3 - a

//fase
//undefined

// b 
// Deu false pois foi o valor atribuido a chave backender, 
//e undefined pois não tinha essa chave dentro do objeto

//Exercício de escrita de código

// 1 
const pessoa = {
nome: "Nicole", 
apelidos: ["Nick", "Ni", "Preta"]
}
function imprime (pessoa) {
        
return console.log(pessoa)
}
imprime(" Eu sou " + pessoa.nome + ", mas pode me chamar de: " + pessoa.apelidos + ".")

   
// 2 
const pessoa1 = {
nome: "Samantha",
idade: 23,
profissão: "estudante"
}

const pessoa2 = {
nome: "Anderson",
idade: 27,
profissão: "veterinário"
}

function imprime (pessoa1,pessoa2) {
let array1 = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissão, pessoa1.profissão.length]
let array2 = [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissão, pessoa2.profissão.length]
return console.log(array1) + console.log(array2)
}
imprime(pessoa1,pessoa2)

// 3

const carrinho = []
const fruta1 = {
nome: "Kiwi",
disponibilidade: true
}
const fruta2 = {
nome: "Laranja",
disponibilidade: true
}
const fruta3 = {
nome: "Pinha",
disponibilidade: true
}
const carrinhoDeFruta = (objeto1, objeto2, objeto3) => {
carrinho.push(objeto1, objeto2, objeto3)
}
carrinhoDeFruta(fruta1, fruta2, fruta3)
const estoqueCarrinhoDeFruta = (objeto) => {
return carrinho[objeto.disponibilidade = false]
}
estoqueCarrinhoDeFruta(fruta1)
console.log(carrinho)


