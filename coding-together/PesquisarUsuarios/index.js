const usuarios = ["nicole", "anderson", "samantha"]

const nomeBuscado = process.argv[2]

const resultadoBuscado = usuarios.filter((nome)=>nome.includes(nomeBuscado))

console.table(resultadoBuscado)