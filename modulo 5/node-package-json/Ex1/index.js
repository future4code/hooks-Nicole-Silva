// Utilizamos o código process.argv[2]

const nome = process.argv[2];
const idade = Number(process.argv[3]);
const novaIdade = Number(idade + 7)

 

console.log(`Olá, ${nome}, você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)